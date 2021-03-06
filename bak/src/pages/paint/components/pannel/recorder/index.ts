import { RecorderStates, RecorderListenerMap, OperateRecord, OPERATE_TYPE, OperateData } from './inerface'
import { EventEmitter } from 'events'



export default class CanvasRecoder {

	static copyCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement {
		const newCanvas = document.createElement('canvas')
		newCanvas.width = canvas.width
		newCanvas.height = canvas.height
		const ctx = newCanvas.getContext('2d')
		if (!ctx) {
			throw 'fail to get context'
		}
		ctx.drawImage(canvas, 0, 0)
		return newCanvas
	}

	constructor(protected canvases: HTMLCanvasElement[]) {
		const operates = canvases.map(canvas => new OperateRecord(OPERATE_TYPE.ADD_LAYER, CanvasRecoder.copyCanvas(canvas)))
		this.record(operates)
	}

	public recodState: RecorderStates = RecorderStates.NONE

	protected eventEmiter = new EventEmitter()

	protected operateRecord: OperateRecord<OPERATE_TYPE>[][] = []

	protected curOperateIndex = 0

	protected curCanvases: HTMLCanvasElement[] = []

	protected maxStep = 500

	protected computState = () => {
		let changedState: RecorderStates | null = null
		const maxHisInd = this.operateRecord.length - 1
		const backNum = this.curOperateIndex
		const forwardNum = maxHisInd - this.curOperateIndex
		if (backNum && forwardNum) {
			changedState = RecorderStates.BOTH
		}
		if (backNum && !forwardNum) {
			changedState = RecorderStates.CAN_UNDO
		}
		if (!backNum && forwardNum) {
			changedState = RecorderStates.CAN_REDO
		}
		if (!backNum && !forwardNum) {
			changedState = RecorderStates.NONE
		}

		if (changedState) {
			this.eventEmiter.emit('stateChange', changedState, this.recodState)
			this.recodState = <RecorderStates>changedState
		}

	}

	public record(operates: OperateRecord<OPERATE_TYPE>[]) {
		if (this.curOperateIndex !== this.operateRecord.length - 1) {
			this.operateRecord.splice(this.curOperateIndex+1)
		}
		this.updateCurCanvases(operates, true)
		if(this.operateRecord.length> this.maxStep){
			this.operateRecord.splice(0, this.maxStep - this.operateRecord.length)
		}
		this.curOperateIndex = this.operateRecord.length - 1
		this.computState()
	}

	protected updateCurCanvases(operates: OperateRecord<OPERATE_TYPE>[], save?: boolean) {
		const ops: OperateRecord<OPERATE_TYPE>[] = []
		operates.forEach(operate => {
			if (operate.type === OPERATE_TYPE.ADD_LAYER) {
				const c = (operate.data) as OperateData[OPERATE_TYPE.ADD_LAYER]
				this.curCanvases.push(CanvasRecoder.copyCanvas(c))
				save && ops.push(operate)
			}
			if (operate.type === OPERATE_TYPE.MODIFY_CANVAS) {
				const { layer, to } = operate.data as OperateData[OPERATE_TYPE.MODIFY_CANVAS]
				const from = this.curCanvases[layer]
				this.curCanvases[layer] = CanvasRecoder.copyCanvas(to)
				save && ops.push(new OperateRecord(OPERATE_TYPE.MODIFY_CANVAS, {layer, from, to:this.curCanvases[layer]}))
			}
			if (operate.type === OPERATE_TYPE.MOVE_LAYER) {
				const { from, to } = operate.data as OperateData[OPERATE_TYPE.MOVE_LAYER]
				const arr1 = this.curCanvases.slice(0, from)
				const arr2 = this.curCanvases.slice(from + 1, to)
				const arr3 = this.curCanvases.slice(to)
				this.curCanvases = arr1.concat(arr2.concat(arr3))
				save && ops.push(operate)
			}
			if (operate.type === OPERATE_TYPE.ROMOVE_LAYER) {
				const { layer } = operate.data as OperateData[OPERATE_TYPE.ROMOVE_LAYER]
				const [delCanvas] = this.curCanvases.splice(layer, 1)
				save && ops.push(new OperateRecord(OPERATE_TYPE.ROMOVE_LAYER, { layer, canvas: delCanvas }))
			}
		})
		if(save){
			this.operateRecord.push(ops)
		}
	}

	public undo(): HTMLCanvasElement[] {
		if (this.recodState === RecorderStates.BOTH || this.recodState === RecorderStates.CAN_UNDO) {
			const lastOperates = this.operateRecord[this.curOperateIndex]
			for (let i = lastOperates.length - 1; i >= 0; i--) {
				const op = lastOperates[i]
				if (op.type === OPERATE_TYPE.ADD_LAYER) {
					// const canvas = op.data as OperateData[OPERATE_TYPE.ADD_LAYER]
					this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.ROMOVE_LAYER, { layer: this.curCanvases.length - 1 })])
				}
				if (op.type === OPERATE_TYPE.MODIFY_CANVAS) {
					const {layer, from} = op.data as OperateData[OPERATE_TYPE.MODIFY_CANVAS]
					if(from){
						this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.MODIFY_CANVAS, {layer, to: from})])
					}else{
						console.error('no from canvas')
					}
				}
				if (op.type === OPERATE_TYPE.MOVE_LAYER) {
					const { from, to } = op.data as OperateData[OPERATE_TYPE.MOVE_LAYER]
					this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.MOVE_LAYER, { from: to, to: from })])
				}
				if (op.type === OPERATE_TYPE.ROMOVE_LAYER) {
					const { layer, canvas } = op.data as OperateData[OPERATE_TYPE.ROMOVE_LAYER]
					if (canvas) {
						this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.ADD_LAYER, canvas)])
						this.updateCurCanvases([new OperateRecord(OPERATE_TYPE.MOVE_LAYER, { from: this.curCanvases.length - 1, to: layer })])
					}
				}
			}
			--this.curOperateIndex
			this.computState()
		}
		return this.curCanvases
	}

	public redo(): HTMLCanvasElement[] {
		if (this.recodState === RecorderStates.BOTH || this.recodState === RecorderStates.CAN_REDO) {
			const ops = this.operateRecord[++this.curOperateIndex]
			this.updateCurCanvases(ops)
			this.computState()
		}
		return this.curCanvases
	}

	// protected logCanvas = (st: string, c: HTMLCanvasElement) => {
	// 	if(!c){
	// 		return
	// 	}
	// 	const ctx = c.getContext('2d')
	// 	if(ctx){
	// 		const a = ctx.getImageData(0,0,c.width,c.height).data.filter(v => v)
	// 		console.log(`${st}, ${this.curOperateIndex}`, a)
	// 	}
	// }


	public addEventListener<T extends keyof RecorderListenerMap>(type: T, fun: RecorderListenerMap[T]) {
		this.eventEmiter.addListener(type, fun)
	}

	public removeEventListener<T extends keyof RecorderListenerMap>(type: T, fun: RecorderListenerMap[T]) {
		this.eventEmiter.removeListener(type, fun)
	}

}
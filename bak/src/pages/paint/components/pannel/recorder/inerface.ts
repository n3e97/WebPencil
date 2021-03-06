
export const enum RecorderStates {

  CAN_UNDO = '1',

  CAN_REDO = '2',

  BOTH = '3',

  NONE = '4',

}

export interface RecorderListenerMap {
  stateChange: (state: RecorderStates, oldState: RecorderStates) => void
}

export const enum  OPERATE_TYPE {
  ADD_LAYER = 1,
  ROMOVE_LAYER = 2,
  MOVE_LAYER = 3,
  MODIFY_CANVAS =4,
}

export interface OperateData {
  [OPERATE_TYPE.ADD_LAYER]:  HTMLCanvasElement
  [OPERATE_TYPE.ROMOVE_LAYER]: { layer: number,  canvas?: HTMLCanvasElement } 
  [OPERATE_TYPE.MOVE_LAYER]: {from: number, to: number}
  [OPERATE_TYPE.MODIFY_CANVAS]: ModifyOperateDate
}

export interface ModifyOperateDate {
  readonly layer: number
  readonly from?: HTMLCanvasElement
  readonly to: HTMLCanvasElement
}

export class OperateRecord <T extends keyof OperateData>{
	constructor(
    public readonly type: T,
    public readonly data: OperateData[T]
	){}
}
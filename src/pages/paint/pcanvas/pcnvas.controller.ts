import { RGBA } from "../top-tool-bar/tool-item/color-selector/rgba"
import { emitterble, emitAfter } from "../../../decorators/emiterble"
import { PCanvasContext } from "./pcanvas.context"
import { Brush, BrushStatus } from "../top-tool-bar/tool-item/brush"
import { WorkDetail, LayerDetail } from "../../../workStorage"
import { PcanvasLayers } from "./pcanvas.layer"

interface Listeners{

    colorchange: (color:RGBA) => void

    init: () => void

    addLayer: ( layerDetail: LayerDetail ) => void

    contentChange: ( layerDetail: LayerDetail ) => void
} 

const pointEvent2BrunshStatus = ({offsetX: x, offsetY: y,tiltX,tiltY, pressure}: PointerEvent) => {
    pressure = pressure>1? pressure * 0.01 : pressure;
    return new BrushStatus(x, y,  pressure, tiltX, tiltY)
}
export type WrapInfo = { wrap: HTMLElement, cover: HTMLElement }
/**
 * 用于控制PCanvascontroller component 的对象.
 */
class PCanvasControllerOrg {

    protected context: PCanvasContext;

    protected layerManager:PcanvasLayers;

    protected color = RGBA.BLACK;


    @emitAfter<Listeners>('init', { shouldEmitParams: false })
    init( {wrap}:  WrapInfo, workDetail: WorkDetail ){
        const { width, height } = workDetail.workInfo
        wrap.style.width = `${width}px`
        wrap.style.height = `${height}px`
        this.layerManager = new PcanvasLayers({wrap, width, height}, workDetail.contens.layers)
        this.context = new PCanvasContext(
            this.layerManager.getCanvas(),
            this.layerManager.getContext(),
            width,
            height,
        )
    }

    @emitAfter<Listeners>('colorchange')
    setColor(color: RGBA) {
        this.context.color = color.toRGBAString()
        this.color = color
    }


    getLayers(){
        return [...this.layerManager.layers]
    }

    @emitAfter<Listeners>('addLayer', { paramsSource: 'return'} )
    addLayer(){
        return this.layerManager.addLayer()
    }

    setBrushWidth(width: number){
        this.context.brushWidth = width
    }

    setOpacity(opacity: number){
        const {r,g,b} = this.color
        const color = new RGBA(r, g, b, opacity)
        this.setColor(color)
    }

    setBrush(brush: Brush){
        if(this.context.brush){
            this.context.brush.destory()
        }
        brush.init()
        this.context.brush = brush
    }

    onPointerDown(p: PointerEvent){
        
        this.context.brush.onStart(pointEvent2BrunshStatus(p),this.context)
    }

    onPointerMove(pointerEvent: PointerEvent):void{
        let ponterEvents: PointerEvent[];
        if((pointerEvent as any).getCoalescedEvents){
            ponterEvents = (pointerEvent as any ).getCoalescedEvents()
        }else{
            ponterEvents =  [pointerEvent]
        }
        this.context.brush.onDraw(
            ponterEvents.map( p => pointEvent2BrunshStatus(p) ),
            this.context
        )
    }

    @emitAfter<Listeners>('contentChange', { paramsSource: 'return' })
    onPointerUp(p: PointerEvent): LayerDetail{
        this.context.brush.onEnd(pointEvent2BrunshStatus(p),this.context)
        this.layerManager.applyTempCanvas()
        return this.layerManager.getFocusDetail()
    }
 }

export const PCanvasController =  emitterble<Listeners>()(PCanvasControllerOrg)
export type PCanvasController = InstanceType<typeof PCanvasController>

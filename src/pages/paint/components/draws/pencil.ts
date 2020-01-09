import { PainterDrawer } from "../painter/interface"


const draw:PainterDrawer = ( context ,{x, y, pressure}, {lastPoint, lineWidthState} ) => {
  if(lastPoint){
    context.beginPath()
    context.moveTo(lastPoint.x, lastPoint.y)
    context.lineWidth = pressure * lineWidthState
    context.lineTo(x, y)
    context.stroke()
    context.closePath()
  }
}
export default draw
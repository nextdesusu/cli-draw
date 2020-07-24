import { Point } from "./types";

export const line = (ctx: CanvasRenderingContext2D, from: Point, to: Point): void => {
    ctx.beginPath();       // Начинает новый путь
    ctx.moveTo(from.x, from.y);    // Передвигает перо в точку 
    ctx.lineTo(to.x, to.y);  // Рисует линию до точки 
    ctx.stroke();
}
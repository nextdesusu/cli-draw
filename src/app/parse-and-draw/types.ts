export interface Point {
    x: number;
    y: number;
}

export interface PADArgs {
    command: string;
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
}
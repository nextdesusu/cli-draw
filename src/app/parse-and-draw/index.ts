import { PADArgs, Point } from "./types";
import { line } from "./Figures";

const parse = (command: string) => {
    const splited: Array<string> = command.split(' ');
    for (let i: number = 0; i < splited.length; i += 1) {
        const token = splited[i];
        switch(token) {
            case "-p":
                break;
            case "-c":
                break;
            case "-lw":
                break;
            case "-lt":
                break;
            default:
                return;
        }
    }
}

const parseAndDraw = ({command, ctx, width, height}: PADArgs): void => {
    ctx.fillStyle = "green";
    const p1: Point = {x: 10, y: 10};
    const p2: Point = {x: 100, y: 100};
    line(ctx, p1, p2);
}

export default parseAndDraw;
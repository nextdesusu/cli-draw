import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import parseAndDraw from "../parse-and-draw";
import { PADArgs } from "../parse-and-draw/types";

@Component({
  selector: 'app-main-canvas',
  templateUrl: './main-canvas.component.html',
  styleUrls: ['./main-canvas.component.css']
})
export class MainCanvasComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  width: 400;
  height: 400;
  constructor() { }

  ngOnInit(): void {
  }

  draw(toParse: string) {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    const args: PADArgs = {
      command: toParse,
      ctx: context,
      width: this.width,
      height: this.height,
    };
    parseAndDraw(args);
  }

}

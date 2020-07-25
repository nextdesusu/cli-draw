import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.css']
})
export class CanvasMenuComponent implements OnInit {
  @Input() drawFunction: (toParse: string) => void;
  constructor() { }

  ngOnInit(): void {
  }

}

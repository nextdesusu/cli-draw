import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name: string = "nextdesu";
  link: string = "https://github.com/nextdesusu/cli-draw";
  constructor() { }

  ngOnInit(): void {
  }

}

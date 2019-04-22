import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  canvasG: any;
  ctx: any;
  backgroundColor = 'black';
  counter = 0;
  dx: number;
  dy: number;
  x: number;
  y: number;
  radi = 300;
  circlArray = [];

  colorArray = [
    '#000205',
    '#072c3a',
    '#267491',
    '#a7b8b5',
    '#cec5bc'
  ];

  ngAfterViewInit() {
    this.canvasG = this.canvas.nativeElement;
    this.ctx = this.canvasG.getContext('2d');
    this.setCanvas();
  }

  setCanvas() {
    this.canvasG.width = window.innerWidth;
    this.canvasG.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      this.dx = this.getRandomInt(5);
      this.dy = this.getRandomInt(5);
      this.x = this.getRandomInt(this.canvasG.width);
      this.y = this.getRandomInt(this.canvasG.height);
      let color = this.getRandomInt(this.colorArray.length);

      this.circlArray.push({ dx: this.dx, dy: this.dy, x: this.x, y: this.y, radi: this.radi, color: this.colorArray[color] });
    }
    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvasG.width, this.canvasG.height);

    this.circlArray.map(x => {
      this.createCircle(x.x, x.y, x.radi, x.color);

      if (x.x > this.canvasG.width || x.x < 0) {
        x.dx = -x.dx;
      }

      if (x.y > this.canvasG.height || x.y < 0) {
        x.dy = -x.dy;
      }

      x.x += x.dx;
      x.y += x.dy;
    })
  }

  createCircle(left: number, top: number, radius: number, color: string) {
    this.ctx.fillStyle = color;
    //this.ctx.strokeStyle = color;
    this.ctx.globalAlpha = .2;

    this.ctx.beginPath();
    this.ctx.arc(left, top, radius, 0, 2 * Math.PI, true);
    this.ctx.fill();
    this.ctx.closePath();
  }

  getRandomInt(val: number) {
    return Math.floor(Math.random() * val);
  }
}
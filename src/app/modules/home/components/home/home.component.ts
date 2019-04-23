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
  dx: number;
  dy: number;
  x: number;
  y: number;
  radi: number;
  circleArray: Array<any>;

  colorArray = [
    '#000205',
    '#072c3a',
    '#267491',
    '#a7b8b5',
    '#cec5bc',
    '#cec5bc'
  ];

  ngAfterViewInit() {
    this.canvasG = this.canvas.nativeElement;
    this.ctx = this.canvasG.getContext('2d');
    this.setCanvas();
    this.animate();
  }

  setCanvas() {
    this.circleArray = [];

    this.canvasG.width = window.innerWidth;
    this.canvasG.height = window.innerHeight;

    let numCircles: number;

    //Change radius and number of circles on resize
    if(this.canvasG.width > 1200) {
      this.radi = 300;
      numCircles = 300;
    } else if (this.canvasG.width > 720 && this.canvasG.width <= 1200) {
      this.radi = 250;
      numCircles = 250;
    } else if (this.canvasG.width <= 720) {
      this.radi = 200;
      numCircles = 150;
    }
    
    let colori = 0;

    let changeX = -1;
    
    //Build put the instructions for building circle in an array to loop through
    for (let i = 0; i < numCircles; i++) {

      this.dx = (this.getRandomInt(3) + 1) * changeX;
      this.dy = (this.getRandomInt(3) + 1) * changeX;

      this.x = this.getRandomInt(this.canvasG.width);
      this.y = this.getRandomInt(this.canvasG.height);

      if( colori < this.colorArray.length ) {
        colori ++;
      } else {
        colori = 0;
      }

      changeX *= -1;
      
      this.circleArray.push({ dx: this.dx, dy: this.dy, x: this.x, y: this.y, radi: this.radi, color: this.colorArray[colori] });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvasG.width, this.canvasG.height);

    this.circleArray.map(x => {
      this.createCircle(x.x, x.y, x.radi, x.color);

      if ( x.x > (this.canvasG.width + (x.radi * 2)) || x.x < (0 - (x.radi * 2)) ) {
        x.dx *= -1;
      }

      if (x.y > (this.canvasG.height + (x.radi * 2)) || x.y < (0 - (x.radi * 2)) ) {
        x.dy *= -1;
      }

      x.x += x.dx;
      x.y += x.dy;
    })
  }

  createCircle(left: number, top: number, radius: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.globalAlpha = 1;

    this.ctx.beginPath();
    this.ctx.arc(left, top, radius, 0, 2 * Math.PI, true);
    this.ctx.fill();
    this.ctx.closePath();
  }

  getRandomInt(val: number) {
    return Math.floor(Math.random() * val);
  }
}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//declarations
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CanvasComponent } from './components/canvas/canvas.component';
 
@NgModule({
 imports:      [ CommonModule, RouterModule ],
 declarations: [ NavComponent, FooterComponent, CanvasComponent ],
 exports:      [ NavComponent, FooterComponent, CanvasComponent, CommonModule, FormsModule ]
})
export class SharedModule { }
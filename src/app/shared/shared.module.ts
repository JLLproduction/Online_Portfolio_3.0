import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// declarations
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { RemoveSlashPipe } from './pipes/remove-slash.pipe';

@NgModule({
 imports:      [ CommonModule, RouterModule ],
 declarations: [ NavComponent, FooterComponent, CanvasComponent, RemoveSlashPipe ],
 exports:      [ NavComponent, FooterComponent, CanvasComponent, RemoveSlashPipe, CommonModule, FormsModule ]
})
export class SharedModule { }

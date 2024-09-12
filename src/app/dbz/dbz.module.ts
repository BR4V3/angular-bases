import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  exports : [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

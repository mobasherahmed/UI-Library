import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  declarations: [
    MyLibComponent,
    PosterComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    PosterComponent
  ]
})
export class MyLibModule { }

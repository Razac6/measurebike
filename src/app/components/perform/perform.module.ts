import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformRoutingModule} from './perform-routing.module';
import {SaddleComponent} from './saddle/saddle.component';

@NgModule({
  imports: [
    CommonModule,
    PerformRoutingModule
  ],
  declarations: [SaddleComponent]
})
export class PerformModule {
}

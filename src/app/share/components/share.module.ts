import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav/nav-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NavRoutingModule
  ],
  declarations: [TileComponent, NavComponent],
  exports: [TileComponent, NavComponent]
})
export class ShareModule {
}

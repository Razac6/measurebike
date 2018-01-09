import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { ShareModule } from '../../share/components/share.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ],
  declarations: [
    HomePageComponent,
    HomeFormComponent,
    HomeDashboardComponent,
  ],
})
export class HomeModule {
}

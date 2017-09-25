import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeFormComponent} from './home-form/home-form.component';

const routes: Routes = [
  {path: 'form', component: HomeFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

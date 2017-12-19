import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SaddleComponent} from './saddle/saddle.component';

const routes: Routes = [{path: 'saddle', component: SaddleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreningDashbardComponent } from './trening-dashbard/trening-dashbard.component';


const routes: Routes = [{path: 'trening-dashboard', component: TreningDashbardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreningRoutingModule {
}

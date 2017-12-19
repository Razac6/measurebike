import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home/home-page/home-page.component';
import {Error404Component} from './components/exeptions/error-404/error-404.component';

const routesConfig: Routes = [
  {path: '', component: HomePageComponent},
  {path: '**', component: Error404Component},
];

export const routerModule = RouterModule.forRoot(routesConfig, {
  enableTracing: false
});

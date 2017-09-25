import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import {HomeModule} from '../components/home/home.module';
import { routerModule } from '../app.routing';
import {ExeptionsModule} from '../components/exeptions/exeptions.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    routerModule,
    ExeptionsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule {
}

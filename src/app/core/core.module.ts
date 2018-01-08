import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HomeModule } from '../components/home/home.module';
import { routerModule } from '../app.routing';
import { ExeptionsModule } from '../components/exeptions/exeptions.module';
import { PerformModule } from '../components/perform/perform.module';
import { ShareModule } from '../share/components/share.module';
import { HttpClientModule } from '@angular/common/http';
import { PartsService } from '../share/services/parts.service';
import { StravaService } from '../share/services/strava.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    routerModule,
    ExeptionsModule,
    PerformModule,
    ShareModule,
    HttpClientModule

  ],
  providers: [PartsService, StravaService],
  bootstrap: [AppComponent]
})
export class CoreModule {
}

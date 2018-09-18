import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { SanjoseComponent } from './components/sanjose/sanjose.component';
import { SeattleComponent } from './components/seattle/seattle.component';
import { BurbankComponent } from './components/burbank/burbank.component';
import { DallasComponent } from './components/dallas/dallas.component';
import { WashingtonComponent } from './components/washington/washington.component';
import { ChicagoComponent } from './components/chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    SanjoseComponent,
    SeattleComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
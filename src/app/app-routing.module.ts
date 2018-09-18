import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurbankComponent } from './components/burbank/burbank.component';
import { ChicagoComponent } from './components/chicago/chicago.component';
import { SanjoseComponent } from './components/sanjose/sanjose.component';
import { SeattleComponent } from './components/seattle/seattle.component';
import { DallasComponent } from './components/dallas/dallas.component';
import { WashingtonComponent } from './components/washington/washington.component';

const routes: Routes = [
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'washington', component: WashingtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
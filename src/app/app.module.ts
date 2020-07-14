import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegistradosComponent } from './registrados/registrados.component';
import { Routes, RouterModule } from '@angular/router';
const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'registrados', component: RegistradosComponent}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, NavComponent, FooterComponent, MainComponent, RegistradosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VentanaPrincipalComponent } from './ventana-principal/ventana-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    VentanaPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

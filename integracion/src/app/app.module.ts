import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { BotonComponent } from './shared/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contadores/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';

@NgModule({
  declarations: [ // en la DECLARATIONS van COMPONENTS
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule  // importamos un MODULE INFERIOR a un MODULE SUPERIOR 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

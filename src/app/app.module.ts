import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
//remove foodmenu,menudetail components


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,   // add routingcomponents instead of (foodmenu , menudetail)
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { AmitavaComponent } from './amitava/amitava.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AmitavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

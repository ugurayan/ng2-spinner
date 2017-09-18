import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpinnerComponent} from '../app/spinner/spinner.component';
import {AllComponent} from '../app/all/all.component';
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AllComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

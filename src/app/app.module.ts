import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormServiceService } from './form-service.service'


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

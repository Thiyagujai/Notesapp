import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { FirstpageComponent }from './firstpage/firstpage.component';
import { FirsthalfComponent } from './firsthalf/firsthalf.component';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FirstpageComponent,
    FirsthalfComponent,
    ViewnotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

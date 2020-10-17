import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftTabMenuComponent } from './left-tab-menu/left-tab-menu.component';
import { ProgressComponent } from './progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AddModuleComponent } from './add-module/add-module.component';
import { FirstStepComponent } from './first-step/first-step.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftTabMenuComponent,
    ProgressComponent,
    AddModuleComponent,
    FirstStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

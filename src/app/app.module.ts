import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LeftTabMenuComponent } from './card/left-tab-menu/left-tab-menu.component';
import { CardComponent } from './card/card.component';
import { CardComponentComponent } from './card/card-component/card-component.component';
import { ApiModule } from 'src/api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { TestapiComponent } from './testapi/testapi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './progress/progress.component';
import { MatButtonModule } from '@angular/material/button';
import { AddModuleComponent } from './add-module/add-module.component';
import { FirstStepComponent } from './first-step/first-step.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftTabMenuComponent,
    CardComponent,
    TestapiComponent,
    CardComponentComponent,
    ProgressComponent,
    AddModuleComponent,
    FirstStepComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'create/firstStep', component: AddModuleComponent},
      {path: '', component: CardComponent}
    ]),
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://realityshift-sber.rtuitlab.ru'}),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

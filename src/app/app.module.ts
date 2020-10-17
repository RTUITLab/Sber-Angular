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

@NgModule({
  declarations: [
    AppComponent,
    LeftTabMenuComponent,
    CardComponent,
    CardComponentComponent,
    TestapiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'test', component: TestapiComponent},
      {path: '', component: CardComponent}
    ]),
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://realityshift-sber.rtuitlab.ru'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

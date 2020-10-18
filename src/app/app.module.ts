import { BrowserModule } from '@angular/platform-browser';
import { forwardRef, NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LeftTabMenuComponent } from './card/left-tab-menu/left-tab-menu.component';
import { CardComponent } from './card/card.component';
import { CardComponentComponent } from './card/card-component/card-component.component';
import { ApiModule } from 'src/api/api.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestapiComponent } from './testapi/testapi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './add-module/progress/progress.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { FirstStepComponent } from './add-module/step/first-step/first-step.component';
import { UserNameInterceptor } from './user-name.interceptor';
import { UsernameComponent } from './username/username.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { SaveProgressComponent } from './add-module/save-progress/save-progress.component';
import { SecondStepComponent } from './add-module/step/second-step/second-step.component';


export const USERNAME_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => UserNameInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    LeftTabMenuComponent,
    CardComponent,
    TestapiComponent,
    CardComponentComponent,
    ProgressComponent,
    AddModuleComponent,
    FirstStepComponent,
    UsernameComponent,
    SaveProgressComponent,
    SecondStepComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'create', component: AddModuleComponent, children: [
        {
          path: 'firstStep', // child route path
          component: FirstStepComponent, // child route component that the router renders
        },
        {
          path: 'secondStep', // child route path
          component: SecondStepComponent, // child route component that the router renders
        }
      ]},
      {path: 'create', component: AddModuleComponent, children: [
        {
          path: 'firstStep/:id', // child route path
          component: FirstStepComponent, // child route component that the router renders
        },
        {
          path: 'secondStep/:id', // child route path
          component: SecondStepComponent, // child route component that the router renders
        }
      ]},
      { path: '', component: CardComponent },
      { path: 'username', component: UsernameComponent },
    ]),
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://realityshift-sber.rtuitlab.ru' }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserNameInterceptor,
    USERNAME_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

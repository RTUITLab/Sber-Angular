import { BrowserModule } from '@angular/platform-browser';
import { forwardRef, NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LeftTabMenuComponent } from './card/left-tab-menu/left-tab-menu.component';
import { CardComponent } from './card/card.component';
import { CardComponentComponent } from './card/card-component/card-component.component';
import { ApiModule } from 'src/api/api.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestapiComponent } from './testapi/testapi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './progress/progress.component';
import { MatButtonModule } from '@angular/material/button';
import { AddModuleComponent } from './add-module/add-module.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { MatSelectModule } from '@angular/material/select';
import { UserNameInterceptor } from './user-name.interceptor';
import { UsernameComponent } from './username/username.component';


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
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'create/firstStep/:id', component: AddModuleComponent },
      { path: 'username', component: UsernameComponent },
      { path: '', component: CardComponent }
    ]),
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://realityshift-sber.rtuitlab.ru' }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    UserNameInterceptor,
    USERNAME_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

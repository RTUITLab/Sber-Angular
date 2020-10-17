import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddModuleComponent } from './add-module/add-module.component';

const routes: Routes = [
  {
    path: 'create/overview',
    component: AddModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

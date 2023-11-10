import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from '../seguranca/auth.guard';
import { CadastrousuarioComponent } from './cadastrousuario.component';

const routes: Routes = [
  {
    path: '',
    component: CadastrousuarioComponent,
   
  },
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CadastrousuarioRoutingModule { }
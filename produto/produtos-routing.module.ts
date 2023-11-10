import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../seguranca/auth.guard';
import { ProdutoComponent } from "./produto.component";


const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent,
    canActivate: [AuthGuard],
    //data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
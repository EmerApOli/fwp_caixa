import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'lancamentos', loadChildren: () => import('../app/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'pessoas', loadChildren: () => import('../app/pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: 'relatorios', loadChildren: () => import('../app/relatorios/relatorios.module').then(m => m.RelatoriosModule) },
 // { path: 'usuarios', loadChildren: () => import('../app/usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'nao-autorizado', component: NaoAutorizadoComponent },
 // { path: 'Teste', loadChildren: () => import('../app/teste/teste.module').then(m => m.TesteModule) },
  //{ path: 'Cadastrodeusuario', loadChildren: () => import('../app/cadastrar-usuario/cadastro-usuario.module').then(m=> m.CadastroUsuarioModule)},
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
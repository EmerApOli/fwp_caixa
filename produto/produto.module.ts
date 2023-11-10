import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { SharedModule } from '../shared/shared.module';



import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoComponent } from './produto.component';

@NgModule({
  declarations: [
    //PessoaCadastroComponent,
   // PessoasPesquisaComponent,
    //PessoaCadastroContatoComponent
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    PanelModule,
    DialogModule,
    DropdownModule,
     ProdutosRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ProdutoModule { }

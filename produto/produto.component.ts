import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProdutoFiltro, ProdutoService } from './produto.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
//import {default as NProgress} from 'nprogress'
import { CartService } from '../cart.service';
import { Product } from './product.model';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  totalRegistros = 0;
  filtro = new ProdutoFiltro()
  produtos: any[] = [];
  items: any[] = [];
  @ViewChild('tabela') grid!: any;



  constructor(
    private title: Title,
    private produtoService: ProdutoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private cartservice:CartService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de pessoas');
    this.produtoService.read().subscribe(product => {
      this.produtos = product
      console.log(product)
    })
  }

 



  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  excluir(produto: any) {

    this.produtoService.excluir(produto.codigo)
      .then(
        () => {
          this.grid.reset();

          this.messageService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' })
        }
      )
      .catch((error) => this.errorHandler.handle(error))

  }

  confirmarExclusao(produto: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(produto);
      }
    });
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.produtoService.pesquisar(this.filtro)
      .then((dados: any) => {
        this.produtos = dados.pessoas;
        this.totalRegistros = dados.total;
      });
  }
  alternarStatus(produto: any): void {
    const novoStatus = !produto.ativo;

    this.produtoService.mudarStatus(produto.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        produto.ativo = novoStatus;
        this.messageService.add({ severity: 'success', detail: `Pessoa ${acao} com sucesso!` });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  addToCart(Product:Product)
     
  {
   // NProgress.start()
    this.cartservice.addItem(Product)
    console.log(Product)
   // NProgress.done()
  }


  


}

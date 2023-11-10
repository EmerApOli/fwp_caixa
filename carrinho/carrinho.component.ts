import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from '../produto/product.model';






//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  router: any;
  items = this.cartService.getItems();
  @ViewChild('tabela') grid!: any;
   
  displayedColumns = ['id', 'name','price', 'action']
   
  constructor(private cartService:CartService ) { }

  ngOnInit() {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("carrinho");
    //carrinho não está vazio
    if(cartSession = null){
      this.cartService.items = JSON.parse(cartSession);
    }
    
    
  }


   
  //criarorder(product){
   // return this.orderservice.createOrder(product);
   // console.log(order);

 // }
   
 


 /* create(): void {
   const order={
      dateCreated:new Date(),
       item:this.items(),
      total:this.total()
      
    }
    this.orderservice.createOrder(order).subscribe(() => {
     //this.orderservice.showMessage('Produto criado!')
      //this.router.navigate(['/orders'])
      console.log(order);
    })}

 

  removeItem(Product: any){
   return  this.cartService.removeItem(Product)
  }*/


 

  

  totalIns() :number{
    return this.cartService.totalIns()
  }

  installments(){
    return this.cartService.installment()
  }


  
    //Create the order
    /* order={
      dateCreated:new Date(),
       ite: this.items,
      total:this.total(),
      
    }*/
    total() :number{
      return this.cartService.total()
    }
   
   // items(): Product[] {
    //  return this.cartService.items;
     
    //}
    
    itemw(){
      return this.cartService.getItemsteste;
     
    }
    
   

}


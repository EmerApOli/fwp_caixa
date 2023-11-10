import { Injectable } from '@angular/core';
import { Product } from './produto/product.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
   ) { }
   items: Product[] = [];

  /*addToCart(product: Product) {
    this.items.push(product);
    sessionStorage.setItem("carrinho",JSON.stringify(this.items))
  }*/

  addItem(product: Product){
    this.items.push(product)
    sessionStorage.setItem("carrinho",JSON.stringify(this.items))
}
removeItem(Product: any){
  this.items.splice(this.items.indexOf(Product), 1)
  //salva na sessão
  sessionStorage.setItem("carrinho",JSON.stringify(this.items))   
}
   /**/
total() :number{
  return this.items
  .map(item => item.price.value)
  .reduce((prev, value)=> prev+value, 0)
}
totalIns():number{
   return this.items
  .map(item => item.price.installmentValue)
  .reduce((prev, value)=> prev+value, 0)   
}
installment():number{
  return Math.max.apply(
      Math,this.items
      .map(function(prod){
      return prod.price.installments;
  }))
}

  

  getItems() {
    return this.items;
  }

getItemsteste():Product[] {
  return this.items.map(item => item);
}
}

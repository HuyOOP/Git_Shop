import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart : any[] = [];

  addToCart(item: any) {
    if (this.products[item.id - 1].inStock == 0) {
      return;
    }
    let index = this.cart.findIndex((element) => element.id === item.id);
    this.products[item.id - 1].inStock--;
    if (index != -1) {
      this.cart[index].quantity++;
    } else {
      this.cart.push(item);
    }
    
  console.log(this.cart);
  }
  removeItem(item: any) {
    this.cart.splice(item, 1);
  }
  products = [
    {
      id : '1',
      name : "Product1",
      description : "BestSelling",
      price : 12000,
      inStock : 20
    },
    {
      id : '2', 
      name : "Product2",
      description : "BetSelling",
      price : 16000,
      inStock : 15
    },
    {
      id : '3',
      name : "Product3",
      description : "Jack5M",
      price : 5000000,
      inStock : 50
    }
  ]

  getTotalPrice() : {
    let total = 0;
        for (const item of this.item) {
            total += item.giasp * item.soluong;
        }
        return total;
  }
  
}

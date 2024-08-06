import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ProductModel } from '../models/product.model';

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

  
  
  products: ProductModel[] = [
    {
      id : '1',
      name : "Onana",
      description : "Chơi chân ngu như bò",
      price : 40000000,
      inStock : 40
    },
    {
      id : '2', 
      name : "Antony",
      description : "Compa 100 củ",
      price : 100000000,
      inStock : 100
    },
    {
      id : '3',
      name : "Yoro",
      description : "Chấn thương ngu",
      price : 6200000,
      inStock : 60
    },
    {
      id : '4',
      name : "Maguire",
      description : "Ngủ trong phòng thu",
      price : 80000000,
      inStock : 80
    },
    {
      id : '5',
      name : "Amrabat",
      description : "Lực cót",
      price : 21000000,
      inStock : 20
    },
    {
      id : '6',
      name : "Bruno",
      description : "Nhìn mặt trông ngu vãi",
      price : 93000000,
      inStock : 90
    },
    {
      id : '7',
      name : "Rashford",
      description : "Thằng đi ship đồ ăn",
      price : 60000000,
      inStock : 60
    }
  ] 
  arsenal: ProductModel[] = [
    {
      id : '1',
      name : "Raya",
      description : "Nhà vô địch Euro",
      price : 30000000,
      inStock : 30
    },
    {
      id : '2',
      name : "Saliba",
      description : "Bức tường xi măng",
      price : 80000000,
      inStock : 80
    },
    {
      id : '4',
      name : "Ben White",
      description : "Thợ làm vườn",
      price : 60000000,
      inStock : 60
    },
    {
      id : '6',
      name : "Gabriel",
      description : "Bức tường xi măng",
      price : 70000000,
      inStock : 70
    },
    {
      id : '7',
      name : "Saka",
      description : "Starboy",
      price : 150000000,
      inStock : 20
    },
    {
      id : '8',
      name : "Odegaard",
      description : "Nhạc trưởng",
      price : 120000000,
      inStock : 20
    },
    {
      id : '9',
      name : "Jesus",
      description : "Calling",
      price : 50000000,
      inStock : 50
    },
    {
      id : '11',
      name : "Martinelli",
      description : "Chiếc F1 của Brazil",
      price : 80000000,
      inStock : 80
    },
    {
      id : '12',
      name : "Timber",
      description : "Backup Hà Lan",
      price : 40000000,
      inStock : 40
    },
    {
      id : '14',
      name : "Nketiah",
      description : "Chân gỗ",
      price : 30000000,
      inStock : 30
    },
    {
      id : '18',
      name : "Tomiyasu",
      description : "Samurai",
      price : 25000000,
      inStock : 30
    },
    {
      id : '19',
      name : "Trossard",
      description : "Sát thủ thiếu ngủ",
      price : 60000000,
      inStock : 60
    },
    {
      id : '41',
      name : "Rice",
      description : "Bao gạo trăm củ",
      price : 120000000,
      inStock : 20
    }
  ]
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public cartService : CartService) {
    
  }
  
  @Input() product !: ProductModel;
  

  addToCart(value: any) {
    this.cartService.addToCart(value);

  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  getTotalPrice(money: any) {
    
  }

 }

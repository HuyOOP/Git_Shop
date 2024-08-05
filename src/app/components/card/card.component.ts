import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

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
  
  @Input() id: string = "";
  @Input() name : string = "";
  @Input() description : string = "";
  @Input() price : number = 0;
  @Input() inStock : number = 0;
  

  addToCart(value: any) {
    this.cartService.addToCart(value);

  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  getTotalPrice(money: any) {
    
  }

 }

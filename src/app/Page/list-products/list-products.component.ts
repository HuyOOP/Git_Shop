import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CardComponent } from '../../components/card/card.component';
import { RouterOutlet} from '@angular/router'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule, CardComponent ,RouterOutlet, RouterLink
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  constructor(public cartService : CartService) {

  }
 }

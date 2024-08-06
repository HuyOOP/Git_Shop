import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  detailProduct!: ProductModel
  constructor(private cartService : CartService, private activatedRoute : ActivatedRoute) {
    const {id} = this.activatedRoute.snapshot.params;
    this.detailProduct = 
      this.cartService.products.find(product => product.id == id) as ProductModel;
    console.log(this.detailProduct);
    
  }
 }

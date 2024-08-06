import { Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { ListProductsComponent } from './Page/list-products/list-products.component';
import { ProductDetailComponent } from './Page/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ListProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    }
];



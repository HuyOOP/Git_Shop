import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CartService } from './services/cart.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatButtonModule, MatDividerModule, MatIconModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project';
  constructor(public cartService: CartService,
              public authService: AuthService
  ) {
  }
  removeItem(index: number){
    this.cartService.removeItem(index);
  }
  
}

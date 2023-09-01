import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  constructor(
    public cartService: CartService
  ){

  }

}

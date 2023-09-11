import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent {
  search: string = '';

  constructor(public cartService: CartService, private router: Router) {}

  onSubmit(param: string) {
    this.router.navigate(['/produtos'], {
      queryParams: { description: param },
    });
  }
}

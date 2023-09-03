import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos/type';
import { ProductIdService } from '../product-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Produtos[] | undefined;

  constructor(private productService: ProductIdService) {}

  ngOnInit(): void {
    this.products = this.productService.getAll();
    
  }
}

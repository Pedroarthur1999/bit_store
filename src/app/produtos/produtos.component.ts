import { Component, OnInit } from '@angular/core';
import { Produtos } from './type';
import { ProductIdService } from '../product-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  products: Produtos[] | undefined;

  constructor(private serviceProduct: ProductIdService ) {}

  ngOnInit(): void {
    this.products = this.serviceProduct.getAll();
  }
}

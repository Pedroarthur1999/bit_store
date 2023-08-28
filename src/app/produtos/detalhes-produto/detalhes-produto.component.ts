import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from '../type';
import { ProductIdService } from 'src/app/product-id.service';
import { CartComponent } from 'src/app/cart/cart.component';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  product: Produtos | undefined;

  constructor(
    private productService: ProductIdService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routerParam = this.router.snapshot.paramMap;
    const productId = Number(routerParam.get('id'));
    this.product = this.productService.getById(productId);
  }
}

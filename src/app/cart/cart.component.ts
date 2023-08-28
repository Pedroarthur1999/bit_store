import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos/type';
import { ProductIdService } from '../product-id.service';
import { ActivatedRoute } from '@angular/router';
import { DetalhesProdutoComponent } from '../produtos/detalhes-produto/detalhes-produto.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart: Produtos[] = [];

  constructor(
    private service: ProductIdService,
    private router: ActivatedRoute,
    private product: DetalhesProdutoComponent
  ){}


  ngOnInit(){

    const routerParam = this.router.snapshot.paramMap
    const productId = Number(routerParam.get("id"))
    
  }
 
}

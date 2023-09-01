import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';
import { CartService } from 'src/app/cart.service';
import { ProductIdService,} from 'src/app/product-id.service';
import { Produtos } from '../type';
import { IProdutoCarrinho } from '../type';


@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  product: Produtos | undefined ;
  quantidades:number = 0

  constructor(
    private productService: ProductIdService,
    private router: ActivatedRoute,
    private notification:NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routerParam = this.router.snapshot.paramMap;
    const productId = Number(routerParam.get('id'));
    this.product = this.productService.getById(productId);
  }


  adicionarCarrinho(mensage:string){
    const products: IProdutoCarrinho = {
      ...this.product!,
      
      quantidadeCarrinho: this.quantidades
    }
    this.cartService.addCart(products)   
    this.notification.notification(mensage)
  }
}

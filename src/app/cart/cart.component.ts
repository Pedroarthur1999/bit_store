import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../cart.service';
import { IProdutoCarrinho } from '../produtos/type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.itensCarrinho = this.cartService.obtainCart();
    this.calculTotal();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  calculTotal() {
    if (this.itensCarrinho.length === 0) {
      this.total = 0;
    }
    this.total = this.itensCarrinho.reduce(
      (acum, curr) => acum + curr.price * curr.quantidadeCarrinho,
      0
    );

    
  }

  deleteItem(itemId: number) {
    this.itensCarrinho = this.itensCarrinho.filter((item) => {
      return item.id !== itemId;
    });

    localStorage.setItem('carrinho', JSON.stringify(this.itensCarrinho));
    this.calculTotal();
  }
}

import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtainCart() {
    this.itens = JSON.parse(localStorage.getItem('carrinho') || '');
    return this.itens;
  }

  addCart(product: IProdutoCarrinho) {
    this.itens.push(product);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
  removeCart(itemId: number) {
    this.itens.filter((item) => {
      return item.id !== itemId;
    });
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
}

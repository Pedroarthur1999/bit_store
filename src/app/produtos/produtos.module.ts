import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CartComponent } from '../cart/cart.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,    
  ]
})
export class ProdutosModule { }

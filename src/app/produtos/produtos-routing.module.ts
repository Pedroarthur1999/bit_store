import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesProdutoComponent },
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}

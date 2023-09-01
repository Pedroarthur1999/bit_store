import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"", redirectTo:"produtos", pathMatch: "full"},
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  {path:'cart', component: CartComponent},
  {path:"**", component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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

  constructor(
    private serviceProduct: ProductIdService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const products = this.serviceProduct.getAll();

    this.route.queryParamMap.subscribe((params) => {
      const description = params.get('description')?.toLowerCase();

      if (description) {
        // Filtrar os produtos com base na descrição fornecida
        this.products = products.filter((product) => {
          return product.description.toLowerCase().includes(description);
        });
      } else {
        // Se não houver parâmetro de descrição, exibir todos os produtos
        this.products = products;
      }
    });
  }
}

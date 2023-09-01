import { Injectable } from '@angular/core';
import { Produtos } from './produtos/type';

@Injectable({
  providedIn: 'root',
})


export class ProductIdService {
  products: Produtos[] = [
    {
      id: 1,
      image: '/assets/mouse-1.png',
      name: 'Mouse Razer',
      description: 'Mouse perfeito para as suas jogatinas!',
      price: 329,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 2,
      image: '/assets/mouse-2.jpg',
      name: 'Mouse Logitech',
      description: 'Mouse sem fio!',
      price: 229,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 3,
      image: '/assets/mouse-3.jpg',
      name: 'Mouse Logitech Gamer',
      description: 'Mouse com 6400 de DPI!',
      price: 129,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 4,
      image: '/assets/teclado-1.jpg',
      name: 'Teclado Mecanico APS',
      description: 'Teclado sem fio.',
      price: 239,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 5,
      image: 'assets/teclado-2.jpg',
      name: 'Teclado mecanico keychrome',
      description: 'Teclado com keycaps double shot!',
      price: 329,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 6,
      image: 'assets/fone-de-ouvido-1.jpg',
      name: 'Air Dots',
      description: 'Fone sem fio APPLE',
      price: 459.99,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 7,
      image: 'assets/fone-de-ouvido-3.jpg',
      name: 'HeadPhone JBL',
      description: 'Fone JBL com áudio stereo ',
      price: 239.99,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 8,
      image: 'assets/placa-video.jpg',
      name: 'GTX 1080 TI',
      description: 'Combo de placas GTX 1080ti',
      price: 5530,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 9,
      image: 'assets/monitor-1.jpg',
      name: 'ALL In One APPLE',
      description: 'APPLE computers',
      price: 12999,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 10,
      image: 'assets/laptop-1.jpg',
      name: 'MacBook Pro',
      description: 'Equipado com intel xeon ',
      price: 8999,
      priceDescription: 'A vista',
      quantidade: 0,
    },
    {
      id: 11,
      image: 'assets/laptop-2.jpg',
      name: 'Notebook Dell',
      description: 'Notebook Full HD de 15,6 pol.',
      price: 3330,
      priceDescription: 'A vista',
      quantidade: 0,
    },

    {
      id: 12,
      image: 'assets/processador.jpg',
      name: 'Ryzen 7',
      description: 'Ryzen 7 3700X ',
      price: 899,
      priceDescription: 'A vista',
      quantidade: 0,
    },
  ];
  constructor() {}

  getAll() {
    return this.products;
  }

  getById(productId: number) {
    return this.products.find((produtos) => {
      return produtos.id === productId;
    });
  }

  
}

export interface Produtos {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  priceDescription: string;
  quantidade: number;
}

export interface IProdutoCarrinho extends Produtos{

  quantidadeCarrinho: number ;

}
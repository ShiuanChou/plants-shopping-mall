export interface ProductsInterface {
    id: number,
    name: string,
    description: string,
    imagePath: string,
    price: number,
    available: number,
    monthlyNews: boolean,
}

export interface BagItemInterface {
  product: ProductsInterface;
  count: number;
}
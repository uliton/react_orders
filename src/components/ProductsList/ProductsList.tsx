import { FC } from 'react';
import { Product } from '../../types';

interface Props {
  products: Product[];
}

export const ProductsList: FC<Props> = ({ products }) => (
  <ul className="ui list">
    {products.map(product => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);

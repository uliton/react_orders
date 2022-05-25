import React from 'react';
import { Product } from '../../react-app-env';

interface Props {
  products: Product[];
}

export const ProductsList: React.FC<Props> = ({ products }) => (
  <ul className="ui list">
    {products.length === 0
      ? 'No products'
      : products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
  </ul>
);

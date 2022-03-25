import { FC } from 'react';
import { FullOrder } from '../../types';
import { ProductsList } from '../ProductsList/ProductsList';

interface Props {
  order: FullOrder;
}

export const Card: FC<Props> = ({ order }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{`${order.title} - (${order.user?.name || 'No user'})`}</p>
        {order.products.length
          ? (
            <ProductsList products={order.products} />
          )
          : (
            <b>No products</b>
          )}
      </div>
    </div>
  </div>
);

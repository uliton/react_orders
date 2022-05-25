import React from 'react';
import { FullOrder } from '../../react-app-env';
import { ProductsList } from '../ProductsList';

interface Props {
  orders: FullOrder[];
}

export const OrdersList: React.FC<Props> = ({ orders }) => (
  <>
    {orders.map(order => (
      <div key={order.id} className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>{`${order.title} - (${order.user?.name || 'Unknown'})`}</p>
            <ProductsList products={order.products} />
          </div>
        </div>
      </div>
    ))}
  </>
);

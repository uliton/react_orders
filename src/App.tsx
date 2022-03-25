import './App.scss';
import {
  FullOrder, Order, Product, User,
} from './types';

import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';
import { Card } from './components/Card/Card';

function prepareOrders(
  orders: Order[],
  users: User[],
  products: Product[],
): FullOrder[] {
  return orders.map((order) => ({
    ...order,
    user: users.find(user => user.id === order.userId),
    products: products.filter(product => product.orderId === order.id),
  }));
}

const preparedOrders = prepareOrders(ordersFromServer, usersFromServer, productsFromServer);

function App() {
  return (
    <div className="container">

      {preparedOrders.map((order) => (
        <Card order={order} key={order.id} />
      ))}

    </div>
  );
}

export default App;

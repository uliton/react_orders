import './App.scss';

import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';
import {
  Order, User, Product, FullOrder,
} from './react-app-env';
import { OrdersList } from './components/OrdersList';

const prepareOrders = (
  orders: Order[],
  users: User[],
  products: Product[],
): FullOrder[] => {
  return orders.map(order => ({
    ...order,
    user: users.find(user => user.id === order.userId),
    products: products.filter(product => product.orderId === order.id),
  }));
};

const preparedOrders = prepareOrders(
  ordersFromServer,
  usersFromServer,
  productsFromServer,
);

function App() {
  return (
    <div className="container">
      <OrdersList orders={preparedOrders} />
    </div>
  );
}

export default App;

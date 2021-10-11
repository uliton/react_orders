import React from 'react';

import './App.scss';

// import users from './api/users.json';
// import products from './api/products.json';
// import orders from './api/orders.json';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Sunday - (Roma)</p>
            <ul className="ui list">
              <li>Banana</li>
              <li>Beer</li>
              <li>Cake</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>My day - (Anna)</p>
            <b>No tasks</b>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Work - (Roma)</p>
            <ul className="ui list">
              <li>Sugar</li>
              <li>Coffee</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Monday - (Anna)</p>
            <ul className="ui list">
              <li>Milk</li>
              <li>Bread</li>
              <li>Eggs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Everyday - (Max)</p>
            <ul className="ui list">
              <li>Cheese</li>
              <li>Sugar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

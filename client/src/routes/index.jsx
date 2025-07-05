import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';  
import Dashboard from '../pages/dashboard';
import Inventory from '../pages/inventory';
import Orders from '../pages/orders';
import Customers from '../pages/customers';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

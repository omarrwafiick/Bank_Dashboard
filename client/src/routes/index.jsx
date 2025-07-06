import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';  
import Dashboard from '../pages/dashboard'; 
import Category from '../pages/category';
import Wallet from '../pages/wallet';
import Notification from '../pages/notification';
import Transaction from '../pages/transaction';
import Trade from '../pages/trade'; 
import Support from '../pages/support';
import FAQ from '../pages/faq';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="notification" element={<Notification />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="trade" element={<Trade />} />
          <Route path="support" element={<Support />} />
          <Route path="faq" element={<FAQ />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

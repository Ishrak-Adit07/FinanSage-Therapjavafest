/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthRoutes from './routesProtection/AuthRoutes';
import GuestRoutes from './routesProtection/GuestRoutes';

import Layout from './pages/Layout';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Home from './pages/Home';
import Dashboard from './pages/users/Dashboard';
import Wallets from './pages/Financials/wallets/Wallets';
import Wallet from './pages/Financials/wallets/Wallet';
import UserTransactions from './pages/Financials/transaction/UserTransactions';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />

          <Route element={<AuthRoutes />}>
    
            <Route path="user/dashboard" element={<Dashboard />} />
            <Route path="user/wallets" element={<Wallets />} />
            <Route path="/walletDetails/:title" element={<Wallet />} />
            <Route path="user/transactions" element={<UserTransactions />} />

          </Route>

          <Route element={<GuestRoutes />}>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

          </Route>


        </Route>

      </Routes>

    </BrowserRouter>
  )
};

export default App;
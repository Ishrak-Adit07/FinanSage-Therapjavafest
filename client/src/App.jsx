/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthRoutes from './routesProtection/AuthRoutes';
import GuestRoutes from './routesProtection/GuestRoutes';

import Home from './pages/Home';
import Wallets from './pages/Financials/wallets/Wallets';
import Wallet from './pages/Financials/wallets/Wallet';
import UserTransactions from './pages/Financials/transactions/UserTransactions';
import Layout from './pages/Layout';

import Login from './pages/Users/Login';
import Register from './pages/Users/Register';
import Dashboard from './pages/Users/Dashboard';
import Profile from './pages/Users/Profile';
import CreateWallet from './pages/Financials/wallets/CreateWallet';
import Budgets from './pages/budgets/Budgets';
import Budget from './pages/budgets/Budget';
import CreateBudget from './pages/budgets/CreateBudget';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />} >

          <Route index element={<Home />} />

          <Route element={<AuthRoutes />}>

            <Route path="user/dashboard" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />

            <Route path="user/wallets" element={<Wallets />} />
            <Route path="/wallet/details/:title" element={<Wallet />} />
            <Route path="/wallet/create" element={<CreateWallet />} />

            <Route path="user/budgets" element={<Budgets />} />
            <Route path="/budget/details/:title" element={<Budget />} />
            <Route path="/budget/create" element={<CreateBudget />} />

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
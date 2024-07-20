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
import BankAccounts from './pages/accounts/BankAccounts';
import CreateAccount from './pages/accounts/CreateAccount';
import FinanSageAccount from './pages/accounts/FinanSageAccount';
import BankAccount from './pages/accounts/BankAccount';
import EditCashFlow from './pages/Financials/cashFlow/EditCashFlow';
import CashFlowReports from './pages/Financials/reports/CashFlowReports';
import ReportToday from './pages/Financials/reports/ReportToday';
import ReportDaily from './pages/Financials/reports/ReportDaily';
import ReportWeekly from './pages/Financials/reports/ReportWeekly';
import ReportMonthly from './pages/Financials/reports/ReportMonthly';
import ReportWallet from './pages/Financials/reports/ReportWallet';
import ReportBankTransactions from './pages/Financials/reports/ReportBankTransactions';
import ReportUserTransactions from './pages/Financials/reports/ReportUserTransactions';
import AllReports from './pages/Financials/reports/AllReports';
import TransactionReports from './pages/Financials/reports/TransactionReports';
import IncomeTax from './pages/Financials/tax/IncomeTax';

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

            <Route path="user/accounts/bank" element={<BankAccounts />} />
            <Route path="/user/account/bank/details/:bankID" element={<BankAccount />} />
            <Route path="/user/account/bank/create" element={<CreateAccount />} />

            <Route path="user/account/finanSage" element={<FinanSageAccount />} />

            <Route path="user/transactions" element={<UserTransactions />} />
            <Route path="user/cashFlow/edit/:typeIncome/:id" element={<EditCashFlow />} />

            <Route path="user/report/all" element={<AllReports />} />

            <Route path="user/report/cashFlow" element={<CashFlowReports />} />
            <Route path="user/report/transaction" element={<TransactionReports />} />

            <Route path="user/report/cashFlow/today" element={<ReportToday />} />
            <Route path="user/report/cashFlow/day" element={<ReportDaily />} />
            <Route path="user/report/cashFlow/week" element={<ReportWeekly />} />
            <Route path="user/report/cashFlow/month" element={<ReportMonthly />} />
            <Route path="user/report/cashFlow/wallet" element={<ReportWallet />} />

            <Route path="user/report/transactions/bank" element={<ReportBankTransactions />} />
            <Route path="user/report/transactions/user" element={<ReportUserTransactions />} />

            <Route path="user/tax/income/calculate" element={<IncomeTax />} />

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
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthRoutes from "./routesProtection/AuthRoutes";
import GuestRoutes from "./routesProtection/GuestRoutes";

import Home from "./pages/Home";
import Wallets from "./pages/Financials/wallets/Wallets";
import Wallet from "./pages/Financials/wallets/Wallet";
import UserTransactions from "./pages/Financials/transactions/UserTransactions";
import Layout from "./pages/Layout";

import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
import Dashboard from "./pages/Users/Dashboard";
import Profile from "./pages/Users/Profile";
import CreateWallet from "./pages/Financials/wallets/CreateWallet";
import BankAccounts from "./pages/accounts/BankAccounts";
import CreateAccount from "./pages/accounts/CreateAccount";
import FinanSageAccount from "./pages/accounts/FinanSageAccount";
import BankAccount from "./pages/accounts/BankAccount";
import EditCashFlow from "./pages/Financials/cashFlow/EditCashFlow";
import ReportToday from "./pages/Financials/reports/ReportToday";
import ReportDaily from "./pages/Financials/reports/ReportDaily";
import ReportWeekly from "./pages/Financials/reports/ReportWeekly";
import ReportMonthly from "./pages/Financials/reports/ReportMonthly";
import ReportWallet from "./pages/Financials/reports/ReportWallet";
import ReportBankTransactions from "./pages/Financials/reports/ReportBankTransactions";
import ReportUserTransactions from "./pages/Financials/reports/ReportUserTransactions";
import AllReports from "./pages/Financials/reports/AllReports";
import Resources from "./pages/resources/Resources";
import News from "./pages/news/News";
import Budgets from "./pages/Financials/budgets/Budgets";
import Budget from "./pages/Financials/budgets/Budget";
import CreateBudget from "./pages/Financials/budgets/CreateBudget";
import FSBankTransactions from "./pages/accounts/FSBankTransactions";
import SendMoney from "./pages/Financials/fsFunctions/SendMoney";
import MakePayment from "./pages/Financials/fsFunctions/MakePayment";
import PayBill from "./pages/Financials/fsFunctions/PayBill";
import CashFlowReportCriteria from "./pages/Financials/reports/CashFlowReportCriteria";
import TransactionReportCriteria from "./pages/Financials/reports/TransactionReportCriteria";
import Financom from "./pages/community/Financom";
import ArticlesPage from "./pages/resources/ArticlesPage";
import CurrenciesPage from "./pages/resources/CurrenciesPage";
import BusinessPage from "./pages/resources/BusinessPage";
import TaxPage from "./pages/Financials/tax/TaxPage";
import RegisterAccount from "./pages/Users/RegisterAccount";
import ProfileSettings from "./pages/Users/ProfileSettings";
import MerchantLogin from "./pages/MerchantUser/MerchantLogin";
import MerchantRegister from "./pages/MerchantUser/MerchantRegister";
import MerchantDashboard from "./pages/MerchantUser/MerchantDashboard";
import Cashout from "./sections/finances/Cashout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route element={<AuthRoutes />}>
            <Route path="register/account" element={<RegisterAccount />} />

            <Route path="merchant/login" element={<MerchantLogin />} />
            <Route path="merchant/register" element={<MerchantRegister />} />

            <Route path="merchant/dashboard" element={<MerchantDashboard />} />

            <Route path="user/dashboard" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/profile/settings" element={<ProfileSettings />} />

            <Route path="user/wallets" element={<Wallets />} />
            <Route path="/wallet/details/:id" element={<Wallet />} />
            <Route path="/wallet/create" element={<CreateWallet />} />

            <Route path="user/budgets" element={<Budgets />} />
            <Route path="/budget/details/:id" element={<Budget />} />
            <Route path="/budget/create" element={<CreateBudget />} />

            <Route path="user/accounts/bank" element={<BankAccounts />} />
            <Route
              path="/user/account/bank/details/:id"
              element={<BankAccount />}
            />
            <Route
              path="/user/account/bank/create"
              element={<CreateAccount />}
            />

            <Route
              path="user/account/finanSage"
              element={<FinanSageAccount />}
            />

            <Route path="user/transactions" element={<UserTransactions />} />
            <Route
              path="user/transactions/fs/bank"
              element={<FSBankTransactions />}
            />
            <Route
              path="user/transactions/send/money"
              element={<SendMoney />}
            />
            <Route
              path="user/transactions/make/pay"
              element={<MakePayment />}
            />
            <Route path="user/transactions/bill/pay" element={<PayBill />} />
            <Route path="user/transactions/cashout" element={<Cashout />} />

            <Route
              path="user/cashFlow/edit/:type/:id"
              element={<EditCashFlow />}
            />

            <Route path="user/report/all" element={<AllReports />} />

            <Route
              path="user/report/cashFlow"
              element={<CashFlowReportCriteria />}
            />
            <Route
              path="user/report/transaction"
              element={<TransactionReportCriteria />}
            />

            <Route
              path="user/report/cashFlow/today"
              element={<ReportToday />}
            />
            <Route path="user/report/cashFlow/day" element={<ReportDaily />} />
            <Route
              path="user/report/cashFlow/week"
              element={<ReportWeekly />}
            />
            <Route
              path="user/report/cashFlow/month"
              element={<ReportMonthly />}
            />
            <Route
              path="user/report/cashFlow/wallet"
              element={<ReportWallet />}
            />

            <Route
              path="user/report/transactions/bank"
              element={<ReportBankTransactions />}
            />
            <Route
              path="user/report/transactions/user"
              element={<ReportUserTransactions />}
            />

            <Route path="user/tax/" element={<TaxPage />} />

            <Route path="user/resources" element={<Resources />} />
            <Route
              path="user/resources/currencies"
              element={<CurrenciesPage />}
            />
            <Route path="user/resources/articles" element={<ArticlesPage />} />
            <Route path="user/resources/business" element={<BusinessPage />} />

            <Route path="user/news" element={<News />} />

            <Route path="user/financom" element={<Financom />} />
          </Route>

          <Route element={<GuestRoutes />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

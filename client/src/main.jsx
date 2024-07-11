import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/app.css'

import UserProvider from './contexts/UserContext.jsx'
import BudgetProvider from './contexts/BudgetContext.jsx'
import WalletProvider from './contexts/WalletContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BudgetProvider>

        <WalletProvider>

          <UserProvider>

            <App />

          </UserProvider>

        </WalletProvider>

      </BudgetProvider>

  </React.StrictMode>
)
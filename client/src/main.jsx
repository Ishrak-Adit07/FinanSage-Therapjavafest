import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/app.css'

import UserProvider from './contexts/UserContext.jsx'
import EnumProvider from './contexts/EnumContext.jsx'
import PropProvider from './contexts/PropContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <EnumProvider>

        <PropProvider>

          <UserProvider>

            <App />

          </UserProvider>

        </PropProvider>

      </EnumProvider>

  </React.StrictMode>
)
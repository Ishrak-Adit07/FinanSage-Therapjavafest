# Front End Implemented Features

## Required to know
## Cashflow
  ```json
  {
    "Purpose": "Non-existent money. Incomes and Expenses added to wallets/budgets."
  }
  ```

## Transaction
  ```json
  {
    "Purpose": "Existent virtual money. Added to FinanSage Account through recharge. Can be transferred to other user accounts, connected bank accounts, can be used to make payments, pay bills or fees."
  }
  ```

## Route Protection

### Guest Routes
  ```json
  {
    "Purpose": "Anyone can access home, login or registration page."
  }
  ```

  ### Authenticated Routes
  ```json
  {
    "Purpose": "No one can access other pages without logging in by directly hitting the api endpoints."
  }
  ```

# Features:

## Home

## User

### Registration

### Login

### Dashboard
  ```json
  {
    "Purpose": "Enlists most frequently used features for faster access"
  }
  ```
- **Graphical Overview of All Cashflows  of all Wallets of User**
- **List of All Recent Cashflows with Edit and Delete Options**
- **Add New Cashflow to a Certain Wallet**
- **List of All Recent Transactions with Edit and Delete Options**
- **Add New User Transaction**
- **Contact Info and Mail card of FinanSage.Official**

### Profile
  ```json
  {
    "Purpose": "User identity display, shortcuts to all features"
  }
  ```

## Wallets
  ```json
  {
    "Purpose": "Used for tracking relavant incomes and expenses of daily life in one wallet, e.g, Home, Office, Shopping etc.",
  }
  ```

### Instantaneous Overview
- **Graphical Overview of All Cashflows of all Wallets of User**
- **List of All Recent Cashflows with Edit and Delete Options**

### Create New Wallet
- **Create wallet with relevant name, preferred currency and an initial balance, if any**

### See Details of Each Wallet Anytime
- **Total Balance**
- **Graphical Overview of All Cashflows of that Wallet**
- **History of All Incomes and Expenses of the Wallet with Edit and Delete Options**

### Add New Cashflow
- **Add new income or expense to wallet with amount and purpose**

### Change Wallet Properties
- **Change wallet name or preferred currency at any time from wallet settings**
- **By changing currency, wallet balance will also change accordingly**

### Delete Wallet
- **Delete wallet when not required anymore**


## Budgets
  ```json
  {
    "Purpose": "Used for tracking relavant expenses of an event, with certain budget in hand, e.g, Shopping, Tour etc.",
  }
  ```

### Instantaneous Overview
- **Graphical Overview of All Expneses in all Budgets**

### Create New Budget
- **Create budget with relevant name, preferred currency and a budget to maintain**

### See Details of Each Wallet Anytime
- **Total Budget**
- **Current Remaining Balance**
- **Graphical Overview of All Expneses of that Budget**
- **History of All Expenses of the Budget with Edit and Delete Options**

### Add New Expense
- **Add new expense to budget with amount and purpose**

### Change Budget Properties
- **Change budget name, total budget or preferred currency at any time from budget settings**
- **By changing currency, budget balance will also change accordingly**

### Link Budget to Wallets
- **Link a budget to one or more wallets**
- **All expenses added to that wallet will be cut from this budget**

### Delete Budget
- **Delete budget when not required anymore**
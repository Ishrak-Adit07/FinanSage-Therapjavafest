# Working API Endpoints

## User

### Register User
- **Endpoint:** `http://localhost:4000/api/user/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "jonsnow@stark.com",
    "password": "jonsnow"
  }

### Login User
- **Endpoint:** `http://localhost:4000/api/user/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "jonsnow@stark.com",
    "password": "jonsnow"
  }

### Delete User
- **Endpoint:** `http://localhost:4000/api/user/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "userID": "user_id"
  }


## Wallet

### Get All Wallets Of User
- **Endpoint:** `http://localhost:4000/api/user/wallets/get/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get Wallet By ID
- **Endpoint:** `http://localhost:4000/api/user/wallet/get/:userID/:walletID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User
  - `walletID` (string): The id of the wallet

### Create Wallet
- **Endpoint:** `http://localhost:4000/api/user/wallet/create`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Wallet Name",
    "currency": "Wallet currency Type",
    "initialBalance": 100
  }

### Edit Wallet Name
- **Endpoint:** `http://localhost:4000/api/user/wallet/edit/name`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "newName": "New wallet name"
  }

### Edit Wallet Currency
- **Endpoint:** `http://localhost:4000/api/user/wallet/edit/currency`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "newCurrency": "New wallet currency"
  }

### Delete Wallet
- **Endpoint:** `http://localhost:4000/api/user/wallet/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "walletID": "Wallet ID"
  }

## Cashflow

### Get All CashFlow Of A User
- **Endpoint:** `http://localhost:4000/api/user/cashflow/get/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get All CashFlow Of A Certain Wallet Of User
- **Endpoint:** `http://localhost:4000/api/user/cashflow/get/:userID/:walletID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User
  - `walletID` (string): The id of the wallet

### Get All CashFlow Within two Wallets Of User
- **Endpoint:** `http://localhost:4000/api/user/cashflow/wallets`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "userID" : "User ID",
    "fromWalletID": "From wallet ID",
    "toWalletID": "To wallet ID"
  }

### Create CashFlow
- **Endpoint:** `http://localhost:4000/api/user/cashflow/create`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "userID" : "User ID",
    "walletID": "Wallet ID",
    "cashFlow": {
        "amount" : 0,
        "type" : "type",
        "note" : "Note added"
    }
  }

### Delete CashFlow
- **Endpoint:** `http://localhost:4000/api/user/cashflow/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "userID" : "User ID",
    "walletID": "Wallet ID",
    "cashFlowID": "Cash Flow ID"
  }

### Edit CashFlow Amount
- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/amount`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID" : "User ID",
    "walletID": "Wallet ID",
    "cashFlowID": "Cash Flow ID", 
    "newAmount" : 0
  }

### Edit CashFlow Note
- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/note`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID" : "User ID",
    "walletID": "Wallet ID",
    "cashFlowID": "Cash Flow ID", 
    "newNote" : "New note"
  }

### Edit CashFlow Type
- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/type`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID" : "User ID",
    "walletID": "Wallet ID",
    "cashFlowID": "Cash Flow ID", 
    "newType" : "New Type"
  }

## Transactions

### Get All Bank Transactions Of User
- **Endpoint:** `http://localhost:4000/api/user/transactions/get/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get All Bank Transactions Wuth A Certain Bank with User
- **Endpoint:** `http://localhost:4000/api/user/transactions/get/:userID/:bankID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User
  - `bankID` (string): The id of the wallet

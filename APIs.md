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
  ```

### Login User

- **Endpoint:** `http://localhost:4000/api/user/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "jonsnow@stark.com",
    "password": "jonsnow"
  }
  ```

### Delete User

- **Endpoint:** `http://localhost:4000/api/user/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "userID": "user_id"
  }
  ```

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
  ```

### Edit Wallet Name

- **Endpoint:** `http://localhost:4000/api/user/wallet/edit/name`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "newName": "New wallet name"
  }
  ```

### Edit Wallet Currency

- **Endpoint:** `http://localhost:4000/api/user/wallet/edit/currency`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "newCurrency": "New wallet currency"
  }
  ```

### Delete Wallet

- **Endpoint:** `http://localhost:4000/api/user/wallet/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "walletID": "Wallet ID"
  }
  ```

## Cashflow

### Get All CashFlow Of A User

- **Endpoint:** `http://localhost:4000/api/user/cashflow/get/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

  ### Get All Recent CashFlow Of A User

- **Endpoint:** `http://localhost:4000/api/user/cashflow/get/recent/:userID`
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
    "userID": "User ID",
    "fromWalletID": "From wallet ID",
    "toWalletID": "To wallet ID"
  }
  ```

### Get Recent CashFlows Of A User
- **Function:** 50-100 latest cashflows of the user
- **Endpoint:** `http://localhost:4000/api/user/cashflow/get/recent/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Create CashFlow

- **Endpoint:** `http://localhost:4000/api/user/cashflow/create`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "walletID": "Wallet ID",
    "cashFlow": {
      "amount": 100,
      "type": "type",
      "note": "Note added"
    }
  }
  ```

### Delete CashFlow

- **Endpoint:** `http://localhost:4000/api/user/cashflow/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "walletID": "Wallet ID",
    "cashFlowID": "Cash Flow ID"
  }
  ```

### Edit CashFlow Wallet

- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/wallet`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "cashFlowID": "Cash Flow ID",
    "newWalletID": "New Wallet ID"
  }
  ```

### Edit CashFlow Amount

- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/amount`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "cashFlowID": "Cash Flow ID",
    "newAmount": 100
  }
  ```

### Edit CashFlow Note

- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/note`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "cashFlowID": "Cash Flow ID",
    "newNote": "New note"
  }
  ```

### Edit CashFlow Type

- **Endpoint:** `http://localhost:4000/api/user/cashflow/edit/type`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "cashFlowID": "Cash Flow ID",
    "newType": "New Type"
  }
  ```

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

### Create Transaction

- **Endpoint:** `http://localhost:4000/api/user/transaction/create`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "bankID": "Bank ID",
    "transaction": {
      "amount": 100,
      "type": "type",
      "note": "Note added"
    },
    "bankAccPin": "12345"
  }
  ```

### Delete Transaction

- **Endpoint:** `http://localhost:4000/api/user/transaction/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "bankID": "Bank ID",
    "transactionID": "Transaction ID",
    "bankAccPin": "12345"
  }
  ```

## Bank Accounts

### Create Connection to Bank Account

- **Endpoint:** `http://localhost:4000/api/user/bank/account/connect`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "bankID": "Bank ID",
    "accountID": "Account ID",
    "accPin": "12345"
  }
  ```

### Delete Connection to Bank Account

- **Endpoint:** `http://localhost:4000/api/user/bank/account/delete`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "userID": "User ID",
    "bankID": "Bank ID",
    "accountID": "Account ID",
    "accPin": "12345"
  }
  ```

## FinanSage Account

### Send Money to Friend Account

- **Endpoint:** `http://localhost:4000/api/user/transaction/finansage`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "fromUserID": "From User ID",
    "toUserID": "To User ID",
    "amount": 100
  }
  ```

## Reports

### Get Daily Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/day/:userID`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "date": "Report Date"
  }
  ```

### Get Weekly Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/week/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get Monthly Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/month/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get Certain Wallet Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/wallet/:userID`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "walletID": "Wallet ID"
  }
  ```

### Get Bank Transactions Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/transactions/banks/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get User Transactions Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/transactions/users/:userID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User

### Get Certain Bank Transactions Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/transactions/bank/:userID/:bankID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User
  - `bankID` (string): The ID of the Bank

### Get Certain User Transactions Report of a User

- **Endpoint:** `http://localhost:4000/api/user/report/get/transactions/user/:userID/:user2ID`
- **Method:** `GET`
- **Parameters:**
  - `userID` (string): The ID of the User
  - `user2ID` (string): The ID of the Other User

## Tax

### Calculate Tax of a User

- **Endpoint:** `http://localhost:4000/api/user/tax/calculate`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "userID": "Report Date",
    "wallets": ["WalletIDs to consider"],
    "types": ["Income types to consider"]
  }
  ```

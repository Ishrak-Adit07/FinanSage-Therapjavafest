# Collection Schemas

### User

- **Fields:**
  ```json
  {
    "userID": "9392829392",
    "username": "jonsnow",
    "email": "jonsnow@gmail.com",
    "hashedPassword": "9392829392",
    "phone": "01234567891",
    "firstName": "Jon",
    "lastName": "Snow"
  }
  ```

### Wallets

- **Fields:**
  ```json
  {
    "walletID": "38298392",
    "userID": "9392829392",
    "walletName": "Market",
    "Currency": "Taka",
    "Balance": 23482.55,
  }
  ```

### Budgets

- **Fields:**
  ```json
  {
    "budgetID": "38298392",
    "userID": "9392829392",
    "budgetName": "Market",
    "budget": 50000.00,
    "Currency": "Taka",
    "Balance": 23482.55,
  }
  ```

### Cashflows

- **Fields:**
  ```json
  {
    "cashflowID": "38298392",
    "walletID": "38298392",
    "userID": "9392829392",
    "type": "Income/Expense",
    "purpose": "Salary/Grocery",
    "Amount": 200.00,
    "datetime": "automatic?",
  }
  ```

### Transactions

- **Fields:**
  ```json
  {
    "transactionID": "38298392",
    "bankID": "38298392",
    "userID": "9392829392",
    "type": "Credit/Withdraw",
    "Amount": 200.00,
    "datetime": "automatic?",
  }
  ```

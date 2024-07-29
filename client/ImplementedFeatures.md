# Front End Implemented Features

## Required Read

## Cashflow
- **Non-existent money.**
- **Incomes and Expenses added to wallets/budgets.**
- **Can be edited or deleted.**

## Transaction
- **Existent virtual money.**
- **Added to FinanSage Account through recharge or transaction**
- **Can be transferred to other user accounts, connected bank accounts, can be used to make payments, pay bills or fees.**
- **Once done, cannot be undone, edited or deleted.**

## Routes Protection
- **Guest Routes**
```json
{
  "Purpose": "Anyone can access home, login or registration page."
}
```
- **Authenticated Routes**
```json
{
  "Purpose": "No one can access other pages without logging in by directly hitting the api endpoints."
}
```

# Features:

## Home

### Introduction to FinanSage

### Advertising Features

### Sign in, Sign up and Contact Options

## User

### Registration

- **Register with email, user handle, password and other relevant information**

### Login

- **Login with email and password**

### Dashboard

```json
{
  "Purpose": "Enlists most frequently used features for faster access"
}
```

- **Graphical Overview of All Cashflows of all Wallets of User**
- **List of All Recent Cashflows with Edit and Delete Options**
- **Add New Cashflow to a Certain Wallet**
- **List of All Recent Transactions**
- **Add New User Transaction**
- **Contact Info and Mail card of FinanSage.Official**

### Profile

```json
{
  "Purpose": "User identity display, shortcuts to all features"
}
```

- **Short overview of user**
- **Shortcuts to all features**
- **Set or change FinanSage account password(for user authentication) and/or pin(for money transactios)**


## Wallets

```json
{
  "Purpose": "Used for tracking relavant incomes and expenses of daily life in one wallet, e.g, Home, Office, Shopping etc."
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
  "Purpose": "Used for tracking relavant expenses of an event, with certain budget in hand, e.g, Shopping, Tour etc."
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

## Bank Accounts

```json
{
  "Purpose": "Used for connection to existing bank accounts, and real money transfer from and to FinanSage account"
}
```

### Connect to New Bank Account

- **Connect FinanSage account to an existing bank account by providing bank name and account number and proper authentication**

### See Details of Each Wallet Anytime

- **Balance of that bank account**
- **History of all transactions between FinanSage account and that bank account**

### Make New Transaction

- **Transfer money from certain bank account to FinanSage Account**
- **Transfer money from FinanSage account to certain bank Account**

### Disconnect Bank Account

- **Disconnect bank cccount from FinanSage account when not required anymore**


## FinanSage Account

```json
{
  "Purpose": "Used for real time money transfer with bank and other users, make payments or pay bills(similar to bkash/nogod), used with username/handle, not by real name(similar to github)"
}
```

### Instant Overview

- **Check balance**
- **History of all transactions with other users and banks**

### Send Money

- **Send money to a connedted user(friend) with proper authentication**
- **Send money to a any user by providing correct user handle and with proper authentication**

### Make payment

- **Make payment to a registered merchant with proper authentication**
- **Make payment to any merchant with by providing user handle and with proper authentication**

### Pay Bill

- **Pay bill of services by selecting relevant service and providing customer number and with proper authentication**

### Bank Transaction

- **Credit money from FinanSage account to a connected bank account with proper authentication**
- **Transfer money from a connected bank account to FinanSage account with proper authentication**


## Cashflow Reports

```json
{
  "Purpose": "See reports any time on all cashflows of one or more wallet(s) on daily, weekly or monthly basis"
}
```

### Customize Cashflows' Report Criteria
- **Customize report period(daily, weekly or monthly), wallets to consider, and start date for the report**

### Report Overview
- **Graphical overview of the report details**

### Report Details
- **Graphical comparison of total incomoes and expenses within this time period in selected wallets**
- **History of all cashflows of selected wallets within selected time period from selected start date**


## Transaction Reports

```json
{
  "Purpose": "See reports any time on all transaction of one or more bank account(s) or with other users on daily, weekly or monthly basis"
}
```

### Customize Transactions' Report Criteria
- **Choose whether to see reports on bank transactions, or inter user transactions**
- **Customize report period(daily, weekly or monthly) and start date for the report**
- **In case of bank transactions, choose one or more bank account(s)**
- **In case of inter user transactions, get report on transactions with all users, or provide any specific user**

### Report Overview
- **Graphical overview of the report details**

### Report Details
- **Graphical comparison of total sent and received money within this time period in selected account(s) or with selected user(s)**
- **History of all transaction of selected account(s) or user(s) within selected time period from selected start date**

## FinanCom

```json
{
  "Purpose": "Community of connected users(FinanSage friends) for financial advisory"
}
```

### Make Friends
- **Send connection requests to other users to make them FinanSage Friends**
- **Accept connection requests from other users to make them FinanSage Friends**

### Share Thoughts/Issues
- **Share what you think will help others**
- **Share your issue(s) for help/advisory from friends**

### FinanCom Feed
- **Live FinanCom Feed to see all shared posts from friends**
- **Read other's thoughts/suggestions from the comment thread**
- **Share your own suggestions**

### Sponsored Advertisement
- **Advertisement for relevant services that might come to your aid**

### Upcoming Events
- **Reminder section for notable upcoming events**

## Notifications

```json
{
  "Purpose": "Reminder for user on certain noteworthy events"
}
```

### FinanCom Friends
- **Notification on getting a connection request, appears on right bar of FinanCom page**

### Budget
- **Notification on reaching a certain point of a budget, appears on top of that budget page**

## Calculator Tools

```json
{
  "Purpose": "Calculating taxes or interests"
}
```
### Annual Tax Calculator
- **Create relevant wallets to provide annual income informations**
- **Customize which wallets and income types to consider**
- **Select appropriate tax category**
- **Know your annual income tax amount**

### Monthly Interest Calculator
- **Select bank account under consideration**
- **Know current account balance and interest of current month according to account policy**

## Resources

```json
{
  "Purpose": "Gather beneficial knowledge and exercise healthy practices to improve financial management skills"
}
```
### Currency Conversion Toools
- **Know the worth of any amount of money in different currencies**
- **Directly provide a wallet to know it's balance's worth in other currencies**

### Read Articles
- **Read top articles on financial habits**

### Know Industries
- **Know about top-tier and growing industries and their financial managements**

## News

```json
{
  "Purpose": "Get latest market and economic news"
}
```

### Market News
- **See top market prices of the day**
- **Link to relevant websites to get more news**

### Regular News
- **Latest news on relevant topics**
- **Link to relevant websites to get more news**

## Contact

### Link and Information
- **Email ID with direct link to send mail**
- **Facebook page ID with direct link to send mail**
- **Same for LinkedIn, Github, Instagram and X**

### Direct Mail Option
- **Form provided to send mail directly from FinanSage Application**



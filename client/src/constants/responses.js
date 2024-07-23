import { ANNUAL_TAX_RATES, BANK_ACCOUNTS, BANKS, CURRENCIES, FRIENDS, USER_BUDGETS, USER_WALLETS } from "."

let dummyLoginResponse = {
    name: "Leisel Merminger",
    firstName: "Leisel",
    lastName: "Merminger",
    username: "leisel",
    userID: "87892543",
    friends: FRIENDS,
    wallets: USER_WALLETS,
    budgets: USER_BUDGETS,
    accounts: BANK_ACCOUNTS,
    currencies: CURRENCIES,
    taxRates: ANNUAL_TAX_RATES,
    banks: BANKS,
    fsAccount: {
        username:"leisel",
        accID: "87892543",
        balance: 3487.95
    }
}

export { dummyLoginResponse }
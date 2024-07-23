import { ANNUAL_TAX_RATES, BANK_ACCOUNTS, BANKS, CURRENCIES, USER_BUDGETS, USER_WALLETS } from "."

let dummyLoginResponse = {
    name: "Leisel Merminger",
    firstName: "Leisel",
    lastName: "Merminger",
    username: "leisel",
    userID: "87892543",
    wallets: USER_WALLETS,
    budgets: USER_BUDGETS,
    accounts: BANK_ACCOUNTS,
    currencies: CURRENCIES,
    taxRates: ANNUAL_TAX_RATES,
    banks: BANKS,
}

export { dummyLoginResponse }
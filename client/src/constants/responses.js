import { ANNUAL_TAX_RATES, BANK_ACCOUNTS, BANKS, CURRENCIES, FRIENDS, USER_BUDGETS, USER_WALLETS } from "."

let dummyLoginResponse = {
    name: "Leisel Merminger",
    firstName: "Leisel",
    lastName: "Merminger",
    username: "leisel",
    userID: "87892543",
    frinds: FRIENDS,
    wallets: USER_WALLETS,
    budgets: USER_BUDGETS,
    accounts: BANK_ACCOUNTS,
    currencies: CURRENCIES,
    taxRates: ANNUAL_TAX_RATES,
    banks: BANKS,
}

export { dummyLoginResponse }
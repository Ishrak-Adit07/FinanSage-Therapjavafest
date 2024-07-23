export const PROJECT_NAME = "FinanSage";

export const PROJECT_NAME_CAP = "FINAN_SAGE";

export const HERO_CONTENT = "This is FinanSage, your personal finance manager";

export const USER_WALLETS = [
  {
    id: "1",
    name: "Owltweet",
    currency: "Dirham",
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 275.75,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "2",
    name: "Games",
    currency: "Yen",
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 200.50,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "3",
    name: "Tour",
    currency: "Taka",
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 44.75,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "4",
    name: "Market",
    currency: "Taka",
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 276.75,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "5",
    name: "Office",
    currency: "Dollar",
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 478.25,
    totalIncome: 1000,
    totalExpense: 500,
  },
];

export const USER_BUDGETS = [
  {
    name: "Owltweet",
    currency: "Dirham",
    budget: 1000,
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 275.75,
  },
  {
    name: "Games",
    currency: "Yen",
    budget: 2000,
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 200.50,
  },
  {
    name: "Tour",
    currency: "Taka",
    budget: 500,
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 44.75,
  },
  {
    name: "Market",
    currency: "Taka",
    budget: 2000,
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 276.75,
  },
  {
    name: "Office",
    currency: "Dollar",
    budget: 1500,
    cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
    balance: 478.25,
  },
];

export const WALLET_INCOME_TYPES = [
  {
    name: "Salary",
    icon: "",
  },
  {
    name: "Business",
    icon: "",
  },
  {
    name: "Gifts",
    icon: "",
  },
  {
    name: "Extra Income",
    icon: "",
  },
  {
    name: "Loan",
    icon: "",
  },
  {
    name: "Insurance",
    icon: "",
  },
  {
    name: "Other",
    icon: "",
  },
];

export const WALLET_EXPENSE_TYPES = [
  {
    name: "Food & Drink",
    icon: "",
  },
  {
    name: "Shopping",
    icon: "",
  },
  {
    name: "Gifts",
    icon: "",
  },
  {
    name: "Transport",
    icon: "",
  },
  {
    name: "Home",
    icon: "",
  },
  {
    name: "Bills & Fares",
    icon: "",
  },
  {
    name: "Entertainment",
    icon: "",
  },
  {
    name: "Car",
    icon: "",
  },
  {
    name: "Travel",
    icon: "",
  },
  {
    name: "Family",
    icon: "",
  },
  {
    name: "Personal",
    icon: "",
  },
  {
    name: "Healthcare",
    icon: "",
  },
  {
    name: "Education",
    icon: "",
  },
  {
    name: "Groceries",
    icon: "",
  },
  {
    name: "Gifts",
    icon: "",
  },
  {
    name: "Sports & Hobbies",
    icon: "",
  },
  {
    name: "Work",
    icon: "",
  },
  {
    name: "Others",
    icon: "",
  },
];

export const RECENT_CASHFLOWS = [
  {
    id : "12344334",
    wallet: {
      name: "Office",
      currency: "Dollar",
      cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
      balance: 478.25,
    },
    type: "Income",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id : "34839283",
    wallet: {
      name: "Market",
      currency: "Taka",
      cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
      balance: 276.75,
    },
    type: "Expense",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id : "28193402",
    wallet: {
      name: "Office",
      currency: "Dollar",
      cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
      balance: 478.25,
    },
    type: "Income",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id : "12834564",
    wallet: {
      name: "Owltweet",
      currency: "Dirham",
      cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
      balance: 275.75,
    },
    type: "Expense",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id : "98345032",
    wallet: {
      name: "Market",
      currency: "Taka",
      cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
      balance: 276.75,
    },
    type: "Expense",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id : "98230832",
    wallet: {
      name: "Market",
      currency: "Taka",
      cashFlowIDs: ["123456","123456","123456","123456","123456","123456","123456"],
      balance: 276.75,
    },
    type: "Income",
    amount: 100,
    date: "27-06-2024",
  },
];

export const RECENT_TRANSACTIONS = [];

export const ANNUAL_TAX_RATES = [
  {
    name: "Corporate",
    rate: 10
  },
  {
    name: "Business",
    rate: 12
  },
  {
    name: "Service",
    rate: 8
  },
  {
    name: "Student",
    rate: 5
  }
];

export const BANKS = [
  {
    name: "Gringotts",
  },
  {
    name: "World Bank",
  },
  {
    name: "Wall St.",
  },
  {
    name: "Iron Bank",
  },
  {
    name: "Capitol",
  },
]

export const BANK_ACCOUNTS = [
  {
    id: "1",
    BankName : "Gringotts",
    AccID : "34273648",
    Balance: 23987.90
  },
  {
    id: "2",
    BankName : "Iron Bank",
    AccID : "87263547",
    Balance: 7890.90
  },
  {
    id: "3",
    BankName : "World Bank",
    AccID : "82737463",
    Balance: 9837.45
  },
  {
    id: "4",
    BankName : "Gringotts",
    AccID : "87263547",
    Balance: 14587.85
  },
]

export const CURRENCIES = [
  "Euro",
  "Dollar",
  "Dinar",
  "Rupee",
  "Dirham",
  "Taka",
  "Yen",
  "Canadian Dollar",
]

export const MARKET_POS = [
  {
    name: "DOHS",
    change: 4.87
  },
  {
    name: "MEG",
    change: 1.27
  },
  {
    name: "ZXY",
    change: 0.97
  }
];

export const MARKET_NEG = [
  {
    name: "ABC",
    change: -1.54
  },
  {
    name: "NID",
    change: -0.78
  },
  {
    name: "AIM",
    change: -0.39
  }
];

export const MARKET_PORTAL_NEWS = [
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Daily Tribune",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234"
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Daily Tribune",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234"
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "The Daily Star",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd  ...",
    newsLink: "https://dailytribune.com/finance/news-1234"
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Times",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234"
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Wall St. Journal",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234"
  }
];

export const FINANSAGE_FEATURES = [
  {
    name: "Wallets",
    bgLink: "",
    features: [
      "Create virtual wallet",
      "Add and track incomes and expenses daylong",
      "Get instant reports any time",
      "Use separate wallets for relevant works"
    ]
  },
  {
    name: "Budgets",
    bgLink: "",
    features: [
      "Create budget plan",
      "Add and track expenses for relevant cause",
      "Get instant reports any time",
      "Use separate budgets for relevant works"
    ]
  },
  {
    name: "Instant Reports",
    bgLink: "",
    features: [
      "Get instant graphical and numerical analysis for all wallets",
      "Reports on daily, weekly or monthly bases",
      "Reports on budget tracking",
      "Reports on bank and inter-user transactions"
    ]
  },
]

export const PERSON_SPECIFIC_FEATURES = [
  {
    name: "Corporate",
    bgLink: "",
    features: [
      "Create virtual wallet",
      "Add and track incomes and expenses daylong",
      "Get instant reports any time",
      "Use separate wallets for relevant works"
    ]
  },
  {
    name: "Business",
    bgLink: "",
    features: [
      "Create budget plan",
      "Add and track expenses for relevant cause",
      "Get instant reports any time",
      "Use separate budgets for relevant works"
    ]
  },
  {
    name: "Student",
    bgLink: "",
    features: [
      "Get instant graphical and numerical analysis for all wallets",
      "Reports on daily, weekly or monthly bases",
      "Reports on budget tracking",
      "Reports on bank and inter-user transactions"
    ]
  },
];

export const REPORT_PERIODS = [
  "Daily",
  "Weekly",
  "Monthly",
]

export const FCFEED_QAS = [
  {
    username : "dumbledore",
    question : "Harry did you put your name in the Goblet of Fire???",
    answers : [
      {
        username: "harrypotter07",
        answer: "Sir, no sir."
      },
      {
        username: "minerva",
        answer: "Potter's a boy, not a piece of meat!"
      },
      {
        username: "snape",
        answer: "Ob-viuos-ly, Mr. Potter is lying, headmaster."
      },
      {
        username: "dumbledore",
        answer: "Well, there is nothing I can do."
      },
    ]
  },
  {
    username : "minerva",
    question : "Did you lie to Prof. Umbridge again, Potter?",
    answers : [
      {
        username: "harrypotter07",
        answer: "No, professor."
      },
      {
        username: "minerva",
        answer: "Take a biscuit, Potter."
      },
    ]
  },
  {
    username : "ishrak.adit07",
    question : "Harry did you put your name in the Goblet of Fire???",
    answers : [
      {
        username: "harrypotter07",
        answer: "Sir, no sir."
      },
    ]
  },
  {
    username : "granger.hermione11",
    question : "Harry did you put your name in the Goblet of Fire???",
    answers : [
      {
        username: "harrypotter07",
        answer: "Sir, no sir."
      },
      {
        username: "minerva",
        answer: "Potter's a boy, not a piece of meat!"
      },
      {
        username: "snape",
        answer: "Ob-viuos-ly, Mr. Potter is lying, headmaster."
      },
      {
        username: "dumbledore",
        answer: "Well, there is nothing I can do."
      },
      {
        username: "snape",
        answer: "Ob-viuos-ly, Mr. Potter is lying, headmaster."
      },
      {
        username: "dumbledore",
        answer: "Well, there is nothing I can do."
      },
    ]
  },
]

let ADVERTISEMENTS = [
  {
    name : "Weasley's Wizard Wheezes",
    catchPhrase: "Mischief Managed"
  },
  {
    name : "Weasley's Wizard Wheezes",
    catchPhrase: "Mischief Managed"
  },
];

let FRIENDS = [
  {
    username: "granger.h11",
  },
  {
    username: "katniss",
  },
  {
    username: "lovegood.luna",
  },
  {
    username: "ishrak07",
  },
  {
    username: "langdon",
  },
  {
    username: "rossatron",
  },
]

export { ADVERTISEMENTS, FRIENDS }

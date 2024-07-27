export const PROJECT_NAME = "FinanSage";

export const PROJECT_NAME_CAP = "FINAN_SAGE";

export const HERO_CONTENT = "This is FinanSage, your personal finance manager";

export const USER_WALLETS = [
  {
    id: "1",
    name: "Owltweet",
    currency: "Dirham",
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 275.75,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "2",
    name: "Games",
    currency: "Yen",
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 200.5,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "3",
    name: "Tour",
    currency: "Taka",
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 44.75,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "4",
    name: "Market",
    currency: "Taka",
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 276.75,
    totalIncome: 1000,
    totalExpense: 500,
  },
  {
    id: "5",
    name: "Office",
    currency: "Dollar",
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 478.25,
    totalIncome: 1000,
    totalExpense: 500,
  },
];

export const USER_BUDGETS = [
  {
    id: "1",
    name: "Owltweet",
    currency: "Dirham",
    budget: 1000,
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 275.75,
    linkedWallets: [
      {
        name: "Owltweet",
        id: "1",
      },
      {
        name: "Games",
        id: "2",
      },
    ],
  },
  {
    id: "2",
    name: "Games",
    currency: "Yen",
    budget: 2000,
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 200.5,
    linkedWallets: [
      {
        name: "Owltweet",
        id: "1",
      },
      {
        name: "Games",
        id: "2",
      },
    ],
  },
  {
    id: "3",
    name: "Tour",
    currency: "Taka",
    budget: 500,
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 44.75,
    linkedWallets: [
      {
        name: "Owltweet",
        id: "1",
      },
      {
        name: "Games",
        id: "2",
      },
    ],
  },
  {
    id: "4",
    name: "Market",
    currency: "Taka",
    budget: 2000,
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 276.75,
    linkedWallets: [
      {
        name: "Office",
        id: "5",
      },
      {
        name: "Games",
        id: "2",
      },
    ],
  },
  {
    id: "5",
    name: "Office",
    currency: "Dollar",
    budget: 1500,
    cashFlowIDs: [
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
      "123456",
    ],
    balance: 478.25,
    linkedWallets: [
      {
        name: "Market",
        id: "4",
      },
      {
        name: "Games",
        id: "2",
      },
    ],
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
    id: "12344334",
    wallet: {
      name: "Office",
      currency: "Dollar",
      cashFlowIDs: [
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
      ],
      balance: 478.25,
    },
    type: "Income",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "34839283",
    wallet: {
      name: "Market",
      currency: "Taka",
      cashFlowIDs: [
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
      ],
      balance: 276.75,
    },
    type: "Expense",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "28193402",
    wallet: {
      name: "Office",
      currency: "Dollar",
      cashFlowIDs: [
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
      ],
      balance: 478.25,
    },
    type: "Income",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "12834564",
    wallet: {
      name: "Owltweet",
      currency: "Dirham",
      cashFlowIDs: [
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
      ],
      balance: 275.75,
    },
    type: "Expense",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98345032",
    wallet: {
      name: "Market",
      currency: "Taka",
      cashFlowIDs: [
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
      ],
      balance: 276.75,
    },
    type: "Expense",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    wallet: {
      name: "Market",
      currency: "Taka",
      cashFlowIDs: [
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
        "123456",
      ],
      balance: 276.75,
    },
    type: "Income",
    amount: 100,
    date: "27-06-2024",
  },
];

export const RECENT_TRANSACTIONS = [
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Credit",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Withdraw",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Credit",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Credit",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Withdraw",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Credit",
    amount: 100,
    date: "27-06-2024",
  },
  {
    id: "98230832",
    bankID: "1",
    bankName: "Gringotts",
    accID: "87927172",
    type: "Credit",
    amount: 100,
    date: "27-06-2024",
  },
];

export const ANNUAL_TAX_RATES = [
  {
    name: "Corporate",
    rate: 10,
  },
  {
    name: "Business",
    rate: 12,
  },
  {
    name: "Service",
    rate: 8,
  },
  {
    name: "Student",
    rate: 5,
  },
];

export const BANKS = [
  {
    id: "1",
    name: "Gringotts",
  },
  {
    id: "2",
    name: "World Bank",
  },
  {
    id: "3",
    name: "Wall St.",
  },
  {
    id: "4",
    name: "Iron Bank",
  },
  {
    id: "5",
    name: "Capitol",
  },
];

export const BANK_ACCOUNTS = [
  {
    id: "1",
    BankName: "Gringotts",
    AccID: "34273648",
    Balance: 23987.9,
    InterestRate: 2.5,
  },
  {
    id: "2",
    BankName: "Iron Bank",
    AccID: "87263547",
    Balance: 7890.9,
    InterestRate: 4,
  },
  {
    id: "3",
    BankName: "World Bank",
    AccID: "82737463",
    Balance: 9837.45,
    InterestRate: 2.2,
  },
  {
    id: "4",
    BankName: "Gringotts",
    AccID: "87263547",
    Balance: 14587.85,
    InterestRate: 3,
  },
];

export const CURRENCIES = [
  "Euro",
  "Dollar",
  "Dinar",
  "Rupee",
  "Dirham",
  "Taka",
  "Yen",
  "Canadian Dollar",
];

export const MARKET_POS = [
  {
    name: "DOHS",
    change: 4.87,
  },
  {
    name: "MEG",
    change: 1.27,
  },
  {
    name: "ZXY",
    change: 0.97,
  },
];

export const MARKET_NEG = [
  {
    name: "ABC",
    change: -1.54,
  },
  {
    name: "NID",
    change: -0.78,
  },
  {
    name: "AIM",
    change: -0.39,
  },
];

export const MARKET_PORTAL_NEWS = [
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Daily Tribune",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234",
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Daily Tribune",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234",
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "The Daily Star",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd  ...",
    newsLink: "https://dailytribune.com/finance/news-1234",
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Times",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234",
  },
  {
    title: "Eventful Day at Wall St., Mixed Reactions",
    paper: "Wall St. Journal",
    preview: "abcd abcd abcd abcd abcd abcd abcd abcd ...",
    newsLink: "https://dailytribune.com/finance/news-1234",
  },
];

export const FINANSAGE_FEATURES = [
  {
    name: "Seamless Management",
    imageLink: "",
    features: ["Smart management tools with easiest user experience"],
  },
  {
    name: "Constant Supervision",
    imageLink: "",
    features: [
      "Instant Reports, graphical analysis, detailed History of recorded financial activities in FinanVision",
    ],
  },
  {
    name: "Advisory Community",
    imageLink: "",
    features: [
      "Share knowledge and skills among your own community in FinanCom",
    ],
  },
  {
    name: "Transfer Money",
    imageLink: "",
    features: ["Send or receive money online to/from other FinanSage users."],
  },
  {
    name: "Bank Transactions",
    imageLink: "",
    features: ["Connect to bank accounts and make credits or withdraws"],
  },
  {
    name: "Make Payments",
    imageLink: "",
    features: ["Make payments via FinanSage account to sellers"],
  },
  {
    name: "Pay Bills",
    imageLink: "",
    features: [
      "Pay service bills/fees like gas, water, electricity or education.",
    ],
  },
  {
    name: "Bank Transactions",
    imageLink: "",
    features: ["Connect to bank accounts and make debits or credits"],
  },
  {
    name: "Financial Toos",
    imageLink: "",
    features: ["Annual tax or monthly interest calculators"],
  },
  {
    name: "Currency tools",
    imageLink: "",
    features: ["Multi-currency support and conversion tools"],
  },
  {
    name: "Resources",
    imageLink: "",
    features: ["We find the top articles and knowledge opportunities for you."],
  },
  {
    name: "News Portal",
    imageLink: "",
    features: [
      "We find the top market news and financial opportunities for you.",
    ],
  },
];

export const MAJOR_FEATURES = [
  {
    name: "Seamless Management",
    imageLink: "",
    features: ["Smart management tools with easiest user experience"],
  },
  {
    name: "Constant Supervision",
    imageLink: "",
    features: ["Instant Reports, graphical analysis, detailed History"],
  },
  {
    name: "Advisory Community",
    imageLink: "",
    features: [
      "Share knowledge and skills among your own community in FinanCom",
    ],
  },
  {
    name: "Transfer Money",
    imageLink: "",
    features: ["Send or receive money online to/from other FinanSage users."],
  },
];

export const PERSON_SPECIFIC_FEATURES = [
  {
    name: "Corporate",
    bgLink: "",
    features: [
      "Create virtual wallet",
      "Add and track incomes and expenses daylong",
      "Get instant reports any time",
      "Use separate wallets for relevant works",
    ],
  },
  {
    name: "Business",
    bgLink: "",
    features: [
      "Create budget plan",
      "Add and track expenses for relevant cause",
      "Get instant reports any time",
      "Use separate budgets for relevant works",
    ],
  },
  {
    name: "Student",
    bgLink: "",
    features: [
      "Get instant graphical and numerical analysis for all wallets",
      "Reports on daily, weekly or monthly bases",
      "Reports on budget tracking",
      "Reports on bank and inter-user transactions",
    ],
  },
];

export const REPORT_PERIODS = ["Daily", "Weekly", "Monthly"];

export const FCFEED_QAS = [
  {
    username: "dumbledore",
    question: "Harry did you put your name in the Goblet of Fire???",
    answers: [
      {
        username: "harrypotter07",
        answer: "Sir, no sir.",
      },
      {
        username: "minerva",
        answer: "Potter's a boy, not a piece of meat!",
      },
      {
        username: "snape",
        answer: "Ob-viuos-ly, Mr. Potter is lying, headmaster.",
      },
      {
        username: "dumbledore",
        answer: "Well, there is nothing I can do.",
      },
    ],
  },
  {
    username: "minerva",
    question: "Did you lie to Prof. Umbridge again, Potter?",
    answers: [
      {
        username: "harrypotter07",
        answer: "No, professor.",
      },
      {
        username: "minerva",
        answer: "Take a biscuit, Potter.",
      },
    ],
  },
  {
    username: "ishrak.adit07",
    question: "Harry did you put your name in the Goblet of Fire???",
    answers: [
      {
        username: "harrypotter07",
        answer: "Sir, no sir.",
      },
    ],
  },
  {
    username: "granger.hermione11",
    question: "Harry did you put your name in the Goblet of Fire???",
    answers: [
      {
        username: "harrypotter07",
        answer: "Sir, no sir.",
      },
      {
        username: "minerva",
        answer: "Potter's a boy, not a piece of meat!",
      },
      {
        username: "snape",
        answer: "Ob-viuos-ly, Mr. Potter is lying, headmaster.",
      },
      {
        username: "dumbledore",
        answer: "Well, there is nothing I can do.",
      },
      {
        username: "snape",
        answer: "Ob-viuos-ly, Mr. Potter is lying, headmaster.",
      },
      {
        username: "dumbledore",
        answer: "Well, there is nothing I can do.",
      },
    ],
  },
];

export const ADVERTISEMENTS = [
  {
    name: "Weasley's Wizard Wheezes",
    catchPhrase: "Mischief Managed",
  },
  {
    name: "Weasley's Wizard Wheezes",
    catchPhrase: "Mischief Managed",
  },
];

export const FRIENDS = [
  {
    name: "Hermione Granger",
    username: "granger.h11",
  },
  {
    name: "Katniss Everdeen",
    username: "katniss",
  },
  {
    name: "Luna Lovegood",
    username: "lovegood.luna",
  },
  {
    name: "Ishrak Adit",
    username: "ishrak07",
  },
  {
    name: "Robert Langdon",
    username: "langdon",
  },
  {
    name: "Ross Geller",
    username: "rossatron",
  },
];

export const REGISTERED_MERCHANTS = [
  {
    username: "three_broomsticks",
    userID: "29837437",
  },
  {
    username: "arong",
    userID: "43722728",
  },
  {
    username: "apex",
    userID: "46382638",
  },
  {
    username: "weasleys_wizard_wheezes",
    userID: "98364758",
  },
  {
    username: "ycd",
    userID: "93726463",
  },

  {
    username: "infinity",
    userID: "98364537",
  },
  {
    username: "ollivanders",
    userID: "93726463",
  },
  {
    username: "rustic_eatery",
    userID: "93726463",
  },
];

export const PAY_BILL_SERVICES = [
  {
    serviceID: "1",
    service: "Gas",
    optionName: "Area",
    options: ["Jalalabad", "Sundarban", "Poshchimanchol", "Titash"],
  },
  {
    serviceID: "2",
    service: "Water",
    optionName: "Area",
    options: ["Dhaka WASA", "Chittagong WASA", "Rajshahi WASA"],
  },
  {
    serviceID: "3",
    service: "Internet & Phone",
    optionName: "Company",
    options: ["BTCL", "Link3", "Carnival", "AmberIT", "Dot Network"],
  },
  {
    serviceID: "4",
    service: "Education",
    optionName: "Institution",
    options: ["DU", "BUET", "ISC", "VNSC", "IIT", "BRAC"],
  },
  {
    serviceID: "5",
    service: "TV",
    optionName: "Company",
    options: ["Akash", "JCC", "DISH"],
  },
  {
    serviceID: "6",
    service: "City Service",
    optionName: "Corporation",
    options: [
      "Dhaka South City Corporation",
      "Dhaka South City Corporation",
      "Rangpur South City Corporation",
      "Sylhet City Corporation",
    ],
  },
];

export const CONNECTION_REQUESTS = [
  {
    name: "Mahmood",
    username: "mahamoodle",
  },
  {
    name: "Corn. Fudge",
    username: "cfudge",
  },
  {
    name: "Peeta Mellark",
    username: "peeta_mellark",
  },
  {
    name: "Tamim Iqbal",
    username: "tiqbal",
  },
];

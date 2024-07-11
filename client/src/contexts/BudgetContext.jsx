/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BudgetContext = createContext();

const BudgetProvider = ({children}) =>{
    
    const [budget, setBudget] = useState({
        name: "budgetName",
        budget_id: "budget_id",
        balance: null,
        wallets: []
    });

    return <BudgetContext.Provider value={{budget, setBudget}}>
        {children}
    </BudgetContext.Provider>
}

export default BudgetProvider;
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const WalletContext = createContext();

const WalletProvider = ({children}) =>{
    
    const [wallet, setWallet] = useState({
        name: "walletName",
        wallet_id: "wallet_id",
        balance: null,
    });

    return <WalletContext.Provider value={{wallet, setWallet}}>
        {children}
    </WalletContext.Provider>
}

export default WalletProvider;
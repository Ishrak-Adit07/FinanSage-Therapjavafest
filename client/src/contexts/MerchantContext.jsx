/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MerchantContext = createContext();

const MerchantProvider = ({ children }) => {
  const [merchant, setMerchant] = useState({
    username: "",
    merchantID: "",
    balance: 0,
  });

  return (
    <MerchantContext.Provider value={{ merchant, setMerchant }}>
      {children}
    </MerchantContext.Provider>
  );
};

export default MerchantProvider;

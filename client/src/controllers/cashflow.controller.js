const createCashFlow = async (userID, walletID, cashFlow) => {
    if (!userID || !walletID || !cashFlow) {
      throw Error("All fields are required");
    }
  
    try {
      const response = await fetch("/api/user/cashFlow/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, walletID, cashFlow }),
      });
  
      const responseData = await response.json();
      if (!responseData.success) {
        throw Error(responseData.error);
      }
  
      return responseData;
    } catch (error) {
      console.error("Error:", error.message);
      throw Error(error.message);
    }
  };

  const editCashFlowAmount = async (userID, walletID, cashFlowID, newAmount) => {
    if (!userID || !walletID || !cashFlowID || !newAmount) {
      throw Error("All fields are required");
    }
  
    try {
      const response = await fetch("/api/user/cashFlow/edit/amount", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, walletID, cashFlowID, newAmount }),
      });
  
      const responseData = await response.json();
      if (!responseData.success) {
        throw Error(responseData.error);
      }
  
      return responseData;
    } catch (error) {
      console.error("Error:", error.message);
      throw Error(error.message);
    }
  };
  
  const deleteCashFlow = async (userID, walletID, cashFlowID) => {
    if (!userID || !walletID || !cashFlowID) {
      throw Error("All fields are required");
    }
  
    try {
      const response = await fetch("/api/user/cashFlow/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, walletID, cashFlowID }),
      });
  
      const responseData = await response.json();
      if (!responseData.success) {
        throw Error(responseData.error);
      }
  
      return responseData;
    } catch (error) {
      console.error("Error:", error.message);
      throw Error(error.message);
    }
  };

  export { createCashFlow, deleteCashFlow, editCashFlowAmount }
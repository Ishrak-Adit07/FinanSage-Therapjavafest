const createConnection = async (userID, bankID, accountID, accPin) => {
    if (!userID || !bankID || !accountID || !accPin) {
      throw Error("All fields are required");
    }
  
    try {
      const response = await fetch("/api/user/bank/account/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, bankID, accountID, accPin }),
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

  const deleteConnection = async (userID, bankID, accountID, accPin) => {
    if (!userID || !bankID || !accountID || !accPin) {
      throw Error("All fields are required");
    }
  
    try {
      const response = await fetch("/api/user/bank/account/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID, bankID, accountID, accPin }),
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

  export { createConnection, deleteConnection }
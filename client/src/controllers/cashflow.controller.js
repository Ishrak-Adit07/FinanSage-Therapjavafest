const getCashFlowsByUser = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(`/api/user/cashFlow/get/${userID}`);

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

const getRecentCashFlowsByUser = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(`/api/user/cashFlow/get/recent/${userID}`);

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

const getCashFlowsByWallet = async (userID, walletID) => {
  if (!userID || !walletID) {
    throw Error("Both User Id and wallet ID are required");
  }

  try {
    const response = await fetch(
      `/api/user/cashFlow/get/${userID}/${walletID}`
    );

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

const getCashFlowsByWallets = async (userID, fromWalletID, toWalletID) => {
  if (!userID || !fromWalletID || !toWalletID) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/cashFlow/wallets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, fromWalletID, toWalletID }),
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

const editCashFlowWallet = async (userID, cashFlowID, newWalletID) => {
  if (!userID || !cashFlowID || !newWalletID) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/cashFlow/edit/wallet", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, cashFlowID, newWalletID }),
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

const editCashFlowAmount = async (userID, cashFlowID, newAmount) => {
  if (!userID || !cashFlowID || !newAmount) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/cashFlow/edit/amount", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, cashFlowID, newAmount }),
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

const editCashFlowNote = async (userID, cashFlowID, newNote) => {
  if (!userID || !cashFlowID || !newNote) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/cashFlow/edit/note", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, cashFlowID, newNote }),
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

const editCashFlowType = async (userID, cashFlowID, newType) => {
  if (!userID || !cashFlowID || !newType) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/cashFlow/edit/type", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, cashFlowID, newType }),
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

export {
  getCashFlowsByUser,
  getRecentCashFlowsByUser,
  getCashFlowsByWallet,
  getCashFlowsByWallets,
  createCashFlow,
  deleteCashFlow,
  editCashFlowWallet,
  editCashFlowAmount,
  editCashFlowNote,
  editCashFlowType,
};

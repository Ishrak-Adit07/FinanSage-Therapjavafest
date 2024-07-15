const getAllWallets = async(userID) =>{
  if (!userID) {
    throw Error("User ID is required");
  }

  try {
    const response = await fetch(`/api/user/wallets/get/${userID}`);

    const responseData = await response.json();
    if (!responseData.success) {
      throw Error(responseData.error);
    }

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
}

const getWalletByID = async(userID, walletID) =>{
  if (!userID || !walletID) {
    throw Error("Both User ID and wallet ID are required");
  }

  try {
    const response = await fetch(`/api/user/wallet/get/${userID}/${walletID}`);

    const responseData = await response.json();
    if (!responseData.success) {
      throw Error(responseData.error);
    }

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
}

const createWallet = async (name, currency, initialBalance) => {
  if (!name || !currency || !initialBalance) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/wallet/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, currency, initialBalance }),
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

const deleteWallet = async (walletID) => {
  if (!walletID) {
    throw Error("Wallet ID is required");
  }

  try {
    const response = await fetch("/api/user/wallet/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ walletID }),
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

const editWalletName = async (newName) => {
  if (!newName) {
    throw Error("New name is required");
  }

  try {
    const response = await fetch("/api/wallet/edit/name", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newName }),
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

const editWalletCurrency = async (newCurrency) => {
  if (!newCurrency) {
    throw Error("New currency is required");
  }

  try {
    const response = await fetch("/api/wallet/edit/currency", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCurrency }),
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

export { getAllWallets, getWalletByID, createWallet, deleteWallet, editWalletName, editWalletCurrency };

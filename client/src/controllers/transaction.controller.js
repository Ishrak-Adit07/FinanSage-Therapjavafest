const getTransactionsByUser = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(`/api/user/transactions/get/${userID}`);

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

const getTransactionsByBank = async (userID, walletID) => {
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

export { getTransactionsByUser, getTransactionsByBank };

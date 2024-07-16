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

const getTransactionsByBank = async (userID, bankID) => {
  if (!userID || !bankID) {
    throw Error("Both User Id and Bank ID are required");
  }

  try {
    const response = await fetch(
      `/api/user/transactions/get/${userID}/${bankID}`
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

const createTransaction = async (userID, bankID, transaction, bankAccPin) => {
  if (!userID || !bankID || !transaction || !bankAccPin) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/transaction/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID, bankID, transaction, bankAccPin }),
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

export { getTransactionsByUser, getTransactionsByBank, createTransaction };

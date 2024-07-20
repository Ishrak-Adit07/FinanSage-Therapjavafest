const getDailyReport = async (userID, date) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  if (!date) {
    throw Error("Date is required");
  }

  try {
    const response = await fetch(`/api/user/report/get/day/${userID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date }),
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

const getWeeklyReport = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(`/api/user/report/get/week/${userID}`);

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

const getMonthlyReport = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(`/api/user/report/get/month/${userID}`);

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

const getWalletReport = async (userID, walletId) => {
  if (!userID || !walletId) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(`/api/user/report/get/wallet/${userID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ walletId }),
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

const getBanksTransactions = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(
      `/api/user/report/get/transactions/banks/${userID}`
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

const getUsersTransactions = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(
      `/api/user/report/get/transactions/users/${userID}`
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

const getBankTransactions = async (userID, bankID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(
      `/api/user/report/get/transactions/banks/${userID}/${bankID}`
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

const getUserTransactions = async (userID, user2ID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch(
      `/api/user/report/get/transactions/banks/${userID}/${user2ID}`
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

export {
  getDailyReport,
  getWeeklyReport,
  getMonthlyReport,
  getWalletReport,
  getBanksTransactions,
  getUsersTransactions,
  getBankTransactions,
  getUserTransactions,
};

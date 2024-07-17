const sendMoney = async (fromUserID, toUserID, amount) => {
  if (!fromUserID || !toUserID || !amount) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/transaction/finansage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fromUserID, toUserID, amount }),
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

export { sendMoney }

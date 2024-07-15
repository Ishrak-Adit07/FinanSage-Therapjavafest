const registerUser = async (email, password, confirmPassword) => {
  if (!email || !password || !confirmPassword) {
    throw Error("All fields are required");
  }

  if (password != confirmPassword) {
    throw Error("Passwords do not match");
  }

  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();
    if (!responseData.success) {
      throw Error(responseData.error);
    }

    localStorage.setItem("webToken", responseData.webToken);
    localStorage.setItem("email", responseData.email);

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
};

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw Error("All fields are required");
  }

  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();

    if (!responseData.success) {
      throw Error(responseData.error);
    }

    localStorage.setItem("webToken", responseData.webToken);
    localStorage.setItem("email", responseData.email);

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
};

const deleteUser = async (userID) => {
  if (!userID) {
    throw Error("User Id is required");
  }

  try {
    const response = await fetch("/api/user/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID }),
    });

    const responseData = await response.json();

    if (!responseData.success) {
      throw Error(responseData.error);
    }

    localStorage.setItem("webToken", responseData.webToken);
    localStorage.setItem("email", responseData.email);

    return responseData;
  } catch (error) {
    console.error("Error:", error.message);
    throw Error(error.message);
  }
};

export { registerUser, loginUser, deleteUser };

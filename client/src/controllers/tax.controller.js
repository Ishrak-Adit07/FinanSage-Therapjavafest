const calculateTax = async( userID, wallets, types ) =>{

    if(!userID || wallets.length === 0 || types.length === 0){
        throw Error("All fields are required");
    }

    try {
        const response = await fetch(`/api/user/tax/calculate}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userID, wallets, types }),
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

}

export { calculateTax }
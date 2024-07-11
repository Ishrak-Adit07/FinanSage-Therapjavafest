const editWalletTitle = async (walletID, newTitle) => {

    if (!walletID || !newTitle) {
        throw Error("All fields are required");
    }

    try {
        const editWalletTitleResponse = await fetch('/api/wallet/editTitle', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ walletID, newTitle })
        });

        const responseData = await editWalletTitleResponse.json();

        if (!editWalletTitleResponse.ok) {
            throw Error(responseData.error);
        }

        return responseData;
    } catch (error) {
        console.error("Error:", error.message);
        throw Error(error.message);
    }
}

const editWalletDescription = async (walletID, newDescription) => {

    if (!walletID || !newDescription) {
        throw Error("All fields are required");
    }

    try {
        const editWalletDescriptionResponse = await fetch('/api/wallet/editTitle', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ walletID, newDescription })
        });

        const responseData = await editWalletDescriptionResponse.json();

        if (!editWalletDescriptionResponse.ok) {
            throw Error(responseData.error);
        }

        return responseData;
    } catch (error) {
        console.error("Error:", error.message);
        throw Error(error.message);
    }
}

export { editWalletTitle, editWalletDescription };
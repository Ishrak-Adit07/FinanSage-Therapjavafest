/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { EnumContext } from "../../../contexts/EnumContext";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WalletSettings = ({ walletID }) => {
  const navigate = useNavigate();

  const { enums } = useContext(EnumContext);

  const [showSettings, setShowSettings] = useState(false);
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const [newWalletName, setNewWalletName] = useState("");
  const [newCurrency, setNewCurrency] = useState("");

  //   const handleBackToWallets = () => {
  //     navigate("/user/wallets");
  //   };

  const handleEditWalletName = () => {
    console.log(newWalletName);
    setNewWalletName("");
  };

  const handleEditCurrency = () => {
    console.log(newCurrency);
    setNewCurrency("");
  };

  //   const handleEditWallet = () => {
  //     console.log( newWalletName, newCurrency);
  //     setNewWalletName("");
  //     setNewCurrency("");
  //   };

  const handleDeleteWallet = () => {
    if (confirm("Are you sure you want to delete this wallet?")) {
      navigate("/user/wallets");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="layoutSection text-slate-700 pb-4">
      <motion.div
        variants={gridSquareVariants}
        className="flex flex-wrap items-center justify-center"
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center w-full">
              <button className="chbtn" onClick={handleShowSettings}>Settings</button>
            </div>
            {showSettings && (
              <div className="flex flex-col items-center justify-center gap-5 mt-6 w-full">
                <div className="flex flex-wrap w-full items-center justify-center">
                  <input
                    type="text"
                    placeholder="Enter new name for wallet"
                    className="xinput w-1/2"
                    autoFocus
                    value={newWalletName}
                    onChange={(e) => {
                      setNewWalletName(e.target.value);
                    }}
                  />
                  <button className="chbtn" onClick={handleEditWalletName}>
                    Edit Name
                  </button>
                </div>

                <div className="flex flex-wrap w-full items-center justify-center">
                  <select
                    className="xinput w-1/2"
                    value={newCurrency}
                    onChange={(e) => {
                      setNewCurrency(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select New Currency
                    </option>
                    {enums.currencies.map((currency, index) => (
                      <option key={index} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>

                  <button className="chbtn" onClick={handleEditCurrency}>
                    Edit Currency
                  </button>
                </div>
                <button className="chbtn" onClick={handleDeleteWallet}>
                  Delete Wallet
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WalletSettings;

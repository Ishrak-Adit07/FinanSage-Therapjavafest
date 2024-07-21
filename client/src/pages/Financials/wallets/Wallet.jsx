/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WalletDetails from '../../../sections/wallets/wallet/WalletDetails';
import WalletFunctions from '../../../sections/wallets/wallet/WalletFunctions';
import WalletGraph from '../../../sections/wallets/wallet/WalletGraph';
import WalletSettings from '../../../sections/wallets/wallet/WalletSettings';

const Wallet = () => {
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className='card w-full'>
      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}
        {!loading && (
          <div>
            <WalletDetails id={id}/>
            <WalletFunctions />
            <WalletGraph />
            <WalletSettings />
          </div>
        )}
      </div>
    </section>
  );
};

export default Wallet;
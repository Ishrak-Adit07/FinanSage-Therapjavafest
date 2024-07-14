/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';
import Success from '../../messages/Success';
import Alert from '../../messages/Alert';
import Contact from '../../sections/company/Contact';

const Dashboard = () => {

  const {user, setUser} = useContext(UserContext)

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  useEffect(()=>{

    setTimeout(async()=>{

      setUser({
        name: "Gale Hawthorne", 
        email: "gale@dist12.com",
      });

      setLoading(false);
    }, 1000);

  }, []);

  return (
    <section className='card'>

      <h1 className='title'>User Dashboard</h1>

      <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading && 
            <h1>This is user dashboard</h1>
          }

          {false && <Contact />}

          {deleteSuccess && <Success msg={"Post was deleted"}/>}
          {error && <Alert msg={error} />}
      </div>



    </section>
  )
}

export default Dashboard;
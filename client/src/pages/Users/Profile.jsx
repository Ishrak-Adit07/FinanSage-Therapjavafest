/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProfileHero from '../../sections/user/ProfileHero';

const Profile = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    setTimeout(async()=>{

      setLoading(false);
    }, 1000);

  }, []);

  return (
    <section className='card w-full'>

        <div>

          {loading && 
            <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
          }

          {!loading &&
            <div>
                <ProfileHero />
            </div>
          }
        </div>

    </section>
  );
}

export default Profile;
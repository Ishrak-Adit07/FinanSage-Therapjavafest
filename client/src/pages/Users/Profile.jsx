/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProfileHero from "../../sections/user/ProfileHero";
import ProfileShrotcuts from "../../sections/user/ProfileShrotcuts";
import Contact from "../../sections/company/Contact";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="card w-full">
      <div>
        {loading && (
          <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>
        )}

        {!loading && (
          <div>
            <ProfileHero />
            <ProfileShrotcuts />
            <Contact />
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;

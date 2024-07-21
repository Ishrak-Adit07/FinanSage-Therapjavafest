/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import Hero from '../sections/Hero';
import Contact from '../sections/company/Contact';
import Footer from '../sections/Footer';

const Home = () => {

  const scrollToAboutMe = useRef(null);
  const scrollToProjects = useRef(null);
  const scrollToContact = useRef(null);

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
              <Hero scrollToContact={scrollToContact}/>
              
              <Contact scrollToContact={scrollToContact}/>
              <Footer />
            </div>
          }
        </div>

    </section>
  );
}

export default Home;
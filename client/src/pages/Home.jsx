/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Hero from '../sections/Hero';
import Contact from '../sections/company/Contact';
import Footer from '../sections/Footer';
import Features from '../sections/company/Features';
import PersonSpecificeFeatures from '../sections/company/PersonSpecificFeatures';
import MajorFeatures from '../sections/company/MajorFeatures';

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
              <MajorFeatures />
              <Features />
              <PersonSpecificeFeatures />
              <Contact scrollToContact={scrollToContact}/>
            </div>
          }
        </div>

    </section>
  );
}

export default Home;
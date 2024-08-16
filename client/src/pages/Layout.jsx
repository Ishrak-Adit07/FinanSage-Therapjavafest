/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';
import Footer from '../sections/Footer';
import ResponsiveNavbar from '../sections/ResponsiveNavbar';

const Layout = () => {

    const scrollToAboutMe = useRef(null);
    const scrollToProjects = useRef(null);
    const scrollToContact = useRef(null);

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogOut = () =>{
        
        if(confirm("Are you sure you want to log out?")){

            setUser({
                name:null, email:null
            });
    
            localStorage.removeItem('email');
            localStorage.removeItem('webToken');
    
            navigate("/");

        }
    }

  return (
    <>
        {false && <header className="bg-indigo-500 text-white fixed w-full top-0 z-10">

            <nav className="flex items-center justify-between p-4">
                <Link title="Home" to="/" className="fa-solid fa-house-chimney nav-link"></Link>

                {user.email ? (
                    <div className="flex items-center gap-2">
                        <Link title="Create post" to="/createPost" className="fa-solid fa-circle-plus nav-link"></Link>
                        <Link title="Dashboard" to="/dashboard" className="fa-solid fa-user nav-link"></Link>
                        <button title='Log out' onClick={handleLogOut} className='fa-solid fa-right-from-bracket nav-link'></button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link title="Log in" to="/login" className="fa-solid fa-right-to-bracket nav-link"></Link>
                        <Link title="Register" to="/register" className="fa-solid fa-registered nav-link"></Link>
                    </div>
                )}

            </nav>

        </header>}

        <ResponsiveNavbar scrollToAboutMe={scrollToAboutMe} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}/>

        <main className="pt-16 items-center w-full h-full">

            <Outlet />
        
        </main>

    </>
  )
}

export default Layout;
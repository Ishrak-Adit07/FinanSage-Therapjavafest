/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import HeroImage from '../assets/images/Profile.jpg';

const Navbar = ({ scrollToAboutMe, scrollToProjects, scrollToContact }) => {
  const handleTargetContact = () => {
    if (scrollToContact.current) {
      scrollToContact.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      setUser({
        name: null,
        email: null
      });

      localStorage.removeItem('email');
      localStorage.removeItem('webToken');

      navigate("/");
    }
  }

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-400 to-purple-400 text-white fixed w-full top-0 z-10 rounded-md shadow-md">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Link title="Home" to="/" className="fa-solid fa-house-chimney nav-link"></Link>
            <Link title="Home" to="/"><span>FinanSage</span></Link>

            {user.email && (
              <span className="inline-block ml-2">
                <Link title="Visit Profile" to="/user/profile">
                <img 
                  src={HeroImage} 
                  alt='Ishrak Adit'
                  className='h-6 w-6 object-cover rounded-full shadow-lg' 
                />
              </Link>
              </span>
            )}
          </div>

          {user.email ? (
            <div className="flex items-center gap-2">
              <Link title="Profile" to="user/profile" className="fa-solid fa-user nav-link"></Link>
              <Link title="Dashboard" to="user/dashboard" className="fa-solid fa-user nav-link"></Link>
              <Link title="Wallets" to="user/wallets" className="fa-solid fa-circle-plus nav-link"></Link>
              <Link title="Budgets" to="user/budgets" className="fa-solid fa-circle-plus nav-link"></Link>
              <button title='Log out' onClick={handleLogOut} className='fa-solid fa-right-from-bracket nav-link'></button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link title="Log in" to="/login" className='px-4'>Log in</Link>
              <Link title="Register" to="/register" className='px-4'>Register</Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

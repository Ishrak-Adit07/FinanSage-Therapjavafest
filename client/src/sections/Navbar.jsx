/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import HeroImage from "../assets/images/Profile.jpg";
import LogoImage from "../assets/images/Kat1NoBg.png";
import { motion } from "framer-motion";
import NavbarCard from "../components/Cards/NavbarCard";
import { NAVBAR_DROPLISTS } from "../constants";

const Navbar = ({ scrollToAboutMe, scrollToProjects, scrollToContact }) => {
  const handleTargetContact = () => {
    if (scrollToContact.current) {
      scrollToContact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      setUser({
        name: null,
        email: null,
      });

      localStorage.removeItem("email");
      localStorage.removeItem("webToken");

      navigate("/");
    }
  };

  return (
    <div>
      <header className="bg-transparent text-white fixed w-full top-0 z-10 rounded-md shadow-lg">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            {false && (
              <Link
                title="Home"
                to="/"
                className="fa-solid fa-house-chimney nav-link"
              ></Link>
            )}
            <span className="bg-transparent">
              <Link title="Home" to="/">
                <img
                  src={LogoImage}
                  alt="Logo"
                  className="h-8 w-8 bg-transparent object-cover rounded-full bg-slate-200"
                />
              </Link>
            </span>
            <Link title="Home" to="/">
              <span className="text-black text-lg">FinanSage</span>
            </Link>

            {user.email && (
              <span className="inline-block ml-2">
                <Link title="Visit Profile" to="/user/profile">
                  <img
                    src={HeroImage}
                    alt="Ishrak Adit"
                    className="h-6 w-6 object-cover rounded-full shadow-lg"
                  />
                </Link>
              </span>
            )}
          </div>

          {user.email ? (
            <div className="flex items-center gap-8 text-slate-700">
              {NAVBAR_DROPLISTS.map((element, index) => (
                <NavbarCard
                  key={index}
                  header={element.header}
                  elements={element.elements}
                  linkTitle={"User Profile"}
                  linkTo={"/user/profile"}
                />
              ))}
              <button
                title="Log out"
                onClick={handleLogOut}
                className="fa-solid fa-right-from-bracket nav-link"
              ></button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-700">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent rounded-lg hover:bg-slate-200 focus:outline-none hover:text-slate-700"
              >
                <Link title="Log in" to="/login" className="px-4">
                  Log in
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent rounded-lg hover:bg-slate-200 focus:outline-none hover:text-slate-700"
              >
                <Link title="Register" to="/register" className="px-4">
                  Register
                </Link>
              </motion.button>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

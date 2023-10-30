import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import brandLogo from "../../assets/Header/wlcmbd2.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Guide", path: "/guide" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative bg-grey-100 dark:bg-slate-900 dark:text-slate-400 w-full shadow-md top-0 left-0">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src={brandLogo}
                alt="Brand Logo"
                className="h-10 w-32 md:h-20 md:w-56 dark:text-white"
              />
            </Link>
            <div>
              <button
                className="dark:text-white w-6 h-6 ml-4 md:hidden"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                className="ml-4 md:hidden h-6 w-6 dark:text-white focus:outline-none"
                onClick={handleMenuToggle}
              >
                {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
              </button>
            </div>
          </div>

          <ul
            className={`bg-white md:bg-transparent dark:text-slate-400 md:flex md:w-auto w-full absolute md:static md:z-auto z-50 left-0 duration-300 ease-in-out ${
              isMenuOpen ? "top-10" : "top-[-350px]"
            } `}
          >
            {links.map((link) => (
              <li
                className={`hover:bg-Sherpa_Blue-500 hover:text-white px-2 py-2 mx-1 rounded transition duration-300 ease-in-out ${
                  location.pathname === link.path
                    ? "bg-Sherpa_Blue-500 text-white"
                    : "text-gray-700 dark:text-slate-400"
                }`}
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
            <hr />

            <button className=" md:w-auto bg-rose-700 hover:bg-rose-800 text-white py-1 my-2 md:my-0 px-4 rounded-full">
              <Link to="/login">Login</Link>
            </button>
            <button
              className="dark:text-white w-6 h-10 ml-2 hidden md:block"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

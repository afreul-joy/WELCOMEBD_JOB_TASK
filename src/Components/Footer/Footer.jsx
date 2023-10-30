import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark:bg-slate-900 mt-6 bg-gray-100 dark:text-slate-100 ">
      <div className="container mx-auto py-4 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black   dark:hover:text-white dark:text-slate-300"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                Cancellation options
              </Link>
            </li>
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                Safety information
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                Community Blog
              </Link>
            </li>
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                Partnerships
              </Link>
            </li>
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/coming" // Changed to "/coming"
                className="text-gray-600 hover:text-black  dark:hover:text-white dark:text-slate-300"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Social</h3>
          <ul className="flex space-x-4">
            <li>
              <Link to="/coming">
                {" "}
                {/* Changed to "/coming" */}
                <i className="fa-brands fa-facebook fa-xl"></i>
              </Link>
            </li>
            <li>
              <Link to="/coming">
                {" "}
                {/* Changed to "/coming" */}
                <i className="fa-brands fa-instagram fa-xl"></i>
              </Link>
            </li>
            <li>
              <Link to="/coming">
                {" "}
                {/* Changed to "/coming" */}
                <i className="fa-brands fa-youtube fa-xl"></i>
              </Link>
            </li>
            <li>
              <Link to="/coming">
                {" "}
                {/* Changed to "/coming" */}
                <i className="fa-brands fa-twitter fa-xl"></i>
              </Link>
            </li>
          </ul>
          <img className="mt-2  " src="/src/assets/Footer/st.jpg" alt="" />
        </div>
      </div>
      <hr />
      {/* Bottom row */}
      <div className=" container mx-auto px-4 py-2 flex items-center justify-center">
        <h2 className="text-gray-600 dark:text-white text-center">
          © Copyright WelcomeBD {currentYear}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

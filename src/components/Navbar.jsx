import React from "react";
import { AuthContext } from "../Auth/AuthContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { logout } = React.useContext(AuthContext);
  const accessToken = localStorage.getItem("accessToken");
  const getLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition duration-200 ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <NavLink to="/" className={getLinkClasses}>
          Stepper
        </NavLink>

        <NavLink to="/dashboard" className={getLinkClasses}>
          Dashboard
        </NavLink>
      </div>
      {accessToken && (
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md shadow transition"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;

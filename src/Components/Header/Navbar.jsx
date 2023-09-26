import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className=" flex gap-2 px-2 justify-between items-center py-6  lg:px-5">
        <Logo></Logo>
        <ul className="flex gap-1 lg:gap-5 text-sm lg:text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "text-[#FF444A] underline text-sm lg:text-xl font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-sm lg:text-xl font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline text-sm lg:text-xl font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

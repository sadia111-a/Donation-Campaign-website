import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6 px-5">
        <Logo></Logo>
        <ul className="flex gap-5 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "text-[#FF444A] underline text-xl font-bold"
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
                  ? "text-[#FF444A] underline text-xl font-bold"
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
                  ? "text-[#FF444A] underline text-xl font-bold"
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

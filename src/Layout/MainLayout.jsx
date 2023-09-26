import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

import Statistics from "../Pages/Statistics/Statistics";
import "../Style/Style.css";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationPage from "../Pages/DonationPage/DonationPage";
import SingleDonation from "../Pages/SingleDonation/SingleDonation";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation",
        element: <DonationPage></DonationPage>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donations/:id",
        element: <SingleDonation></SingleDonation>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default myCreatedRoute;

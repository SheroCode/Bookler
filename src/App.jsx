import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookingFormCard from "./components/BookingFormCard/BookingFormCard";
import HotelCard from "./components/HotelCard/HotelCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import RecommendedCard from "./components/RecommendedCard/RecommendedCard";
import SearchBar from "./components/SearchBar/SearchBar";
import SideBar from "./components/SideBar/SideBar";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import BookingPage from "./pages/BookingPage/BookingPage";
import { lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "mybooking",
          element: <BookingPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

      {/* <Register /> */}
      {/* <Login/> */}
      {/* <SideBar/> */}
      {/* <RecommendedCard/> */}
      {/* <HotelCard/> */}
      {/* <ProfileCard /> */}
      {/* <SearchBar/> */}
      {/* <BookingFormCard/>
<SummaryCard/> */}
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
import { Suspense } from "react";
import { Spinner } from "flowbite-react";

function Layout() {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className='w-10/12 ms-auto pe-10 ps-5'>
        <SearchBar />
        <Suspense fullback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import SideBar from "../components/SideBar/SideBar";
import { Suspense } from "react";

function Layout() {
  return (
    <>
      <Navbar />
      <SideBar />
      <SearchBar />
      <div className='w-4/5 ms-auto pe-10 ps-5'>
        <Suspense fullback={<div> loading....</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;

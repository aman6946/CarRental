import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/owner/Sidebar";
import NavbarOwner from "../../components/owner/NavbarOwner";

const Layout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">
        <NavbarOwner />
        <div className="p-6">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Layout;
import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-12'>
        <div className='col-span-3'>
          <Sidebar />
        </div>
        <div className='col-span-9'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

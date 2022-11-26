import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
}

export default Header;

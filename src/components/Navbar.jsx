import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[250px] borer-2 border-black">
      <div className="p-10 flex justify-center items-center text-center">
        <Link to="/invoices" className="underline">
          Invoices
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

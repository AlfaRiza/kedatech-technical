import { useState } from "react";
import Menu from "./Menu";

declare interface NavbarInterface {
  onClick: () => void;
}

const Navbar = ({ onClick } : NavbarInterface) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="bg-white drop-shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between h-20 px-5">
        <a href="#" className="flex-shrink-0 font-bold tracking-wider">ERP</a>
        <div className="hidden md:block">
          <Menu onClick={() => onClick()} />
        </div>
        <button
          type="button"
          className="md:hidden bg-primary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">{showMobileMenu && <Menu onClick={() => {onClick()}} />}</div>
    </nav>
  );
};

export default Navbar;

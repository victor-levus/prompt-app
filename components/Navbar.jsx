import Image from "next/image";
import React from "react";

const Navbar = () => {
  const loggedInUser = "Victor Umedum";
  return (
    <nav className="h-[80px] bg-gray-100">
      <div className="navbar px-3 md:px-0 h-full mx-auto flex justify-between items-center md:container">
        <div className="flex items-center gap-1">
          <Image src="/assets/icons/logo2.png" width={40} height={40} />
          <span className="text-2xl font-semibold font-serif">Prompty</span>
        </div>
        <div>
          <button>
            {loggedInUser ? (
              <Image src="/assets/icons/userlogo.png" width={40} height={40} />
            ) : (
              <Image src="/assets/icons/login.svg" width={40} height={40} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

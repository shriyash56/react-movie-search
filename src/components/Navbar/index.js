import React from "react";

export default function Navbar() {
  return (
    <header className="header bg-gray-400 relative z-50 shadow-sm w-full ">
      <nav className="boxed mx-auto py-5  text-black flex items-center text-2xl font-bold justify-between">
        <span className="logo">buyceps TEST</span>
        <ul className="flex font-light text-base gap-x-6">
          <li className="">Login</li>
          <li>Signup</li>
        </ul>
      </nav>
    </header>
  );
}

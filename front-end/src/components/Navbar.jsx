

import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="bg-black/100 opacity-90 flex w-auto h-32">
      {/* {logo} */}
      <div>
        <Link to="/">
          <img src={Logo} width={127} className="bg-slate-200" alt="Logo" />
        </Link>
      </div>
      {/* {Title} */}
      <div className="my-5 ml-4">
        <h1 className="text-5xl text-neutral-300 font-extrabold">KEWTON</h1>
      </div>
      {/* {navigation} */}
      <div className="ml-96">
        <nav className="p-16">
          <ul className="flex justify-between items-center">
            <Link to="/aboutus">
              <li className="text-white/40 text-3xl p-4 hover:text-yellow-200">About us</li>
            </Link>
            <Link to="/blog">
              <li className="text-white/40 text-3xl p-4 hover:text-yellow-200">Blog</li>
            </Link>
            <Link to="/contactus">
              <li className="text-white/40 text-3xl p-4 hover:text-yellow-200">Contact Us</li>
            </Link>
            <Link to="/login">
              <li className="text-white/40 text-3xl p-4 hover:text-yellow-200">Login</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

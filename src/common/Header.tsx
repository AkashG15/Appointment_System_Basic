import React from 'react';
import logo from "../logo/react-1-logo.png";
import { NavLink } from 'react-router-dom';
import NavLinkButton from './NavLinkButton';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img
            className="h-8 mr-2"
            src={logo}
            alt="Logo"
          />
          <span className="text-white text-lg font-semibold">Appointment System</span>
        </div>
        <nav className="nav-links">
          <ul className="flex item-center space-x-4">
            <li>
              <NavLinkButton btPath='/' btName='Admin' btType='bt-success'></NavLinkButton>
            </li>
            <li>
              <NavLinkButton btPath='/doctor' btName='Doctor' btType='bt-success'></NavLinkButton>
            </li>
            <li>
              <NavLinkButton btPath='/user' btName='User' btType='bt-success'></NavLinkButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

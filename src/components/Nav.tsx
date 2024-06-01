import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import UserIcon from "./UserIcon";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="shadow-md flex font-bold gap-[121px] justify-between px-[87px] py-[10px] items-center">
      <Logo />
      <NavLink to="/" currentPath={location.pathname}>
        수어 번역
      </NavLink>
      <NavLink to="/shadowing" currentPath={location.pathname}>
        수어 쉐도잉
      </NavLink>
      <NavLink to="/quiz" currentPath={location.pathname}>
        수어 퀴즈
      </NavLink>
      <NavLink to="/pronunciation" currentPath={location.pathname}>
        발음 교정
      </NavLink>
      <UserIcon />
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`hover:text-[#0169F4] text-[16px] ${
        isActive ? "text-[#0169F4]" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Nav;

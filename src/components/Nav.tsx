import Logo from "./Logo";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="shadow-md flex font-bold gap-[121px] justify-between px-[87px] py-[10px] items-center">
      <Logo />
      <Link to="/" className="hover:text-[#0169F4] text-[16px]">
        수어 번역
      </Link>
      <Link to="/" className="hover:text-[#0169F4] text-[16px]">
        수어 쉐도잉
      </Link>
      <Link to="/" className="hover:text-[#0169F4] text-[16px]">
        수어 퀴즈
      </Link>
      <Link to="/" className="hover:text-[#0169F4] text-[16px]">
        발음 교정
      </Link>
      <UserIcon />
    </nav>
  );
};

export default Nav;

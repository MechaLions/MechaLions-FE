import logoImage from "../../public/logoImg.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImage} width={50} loading="lazy" alt="로고" />
    </Link>
  );
};

export default Logo;

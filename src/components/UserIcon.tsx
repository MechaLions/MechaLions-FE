import logoImage from "../../public/userIcon.png";
import { Link } from "react-router-dom";

const UserIcon = () => {
  return (
    <Link to="/">
      <img src={logoImage} width={41} loading="lazy" alt="사용자프로필" />
    </Link>
  );
};

export default UserIcon;

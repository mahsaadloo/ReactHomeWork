import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="h-20 border-b-2 border-rose-300 bg-rose-100 flex gap-10 items-center">
      <img src="./logo.png" alt="" className="h-12 px-10" />
      <Link to="/"> HOME </Link>
      <Link to="/about"> ABOUT </Link>
      <Link to="/auth/register"> Register noW! </Link>
      {!localStorage.getItem("loginInfo") ? (
        <Link to="/auth/login"> Login </Link>
      ) : (
        <Link to="/auth/logout"> LogOut </Link>
      )}
    </nav>
  );
};
export default Navbar;

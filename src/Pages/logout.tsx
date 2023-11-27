import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInfoType } from "./login";

const Logout: FC = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const loggedInUser: LoginInfoType = {
      isLoggedIn: false,
    };

    if (!loggedInUser.isLoggedIn) {
      localStorage.removeItem("loginInfo");
      navigation("/auth/login");
    }
  }, [navigation]);

  return null; // or any other JSX if needed
};

export default Logout;

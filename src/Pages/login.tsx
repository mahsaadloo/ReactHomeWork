import { type FC, useEffect } from "react";
import Textfield from "../Component/textfield";
import Button from "../Component/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormTypes } from "./register";
import { Link, useNavigate } from "react-router-dom";

interface FormLoginTypes {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email field shouldn't be empty")
    .email("Your email is not valid !"),
  password: yup.string().required("Password field shouldn't be empty"),
});

export interface LoginInfoType {
  user?: string;
  isLoggedIn: boolean;
}

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const navigation = useNavigate();

  const handleSubmitLoginForm = (data: FormLoginTypes): void => {
    const localStorageUser: string | null = localStorage.getItem("user");
    if (localStorageUser) {
      const userObject: FormTypes = JSON.parse(localStorageUser);
      if (userObject.email === data.email) {
        if (userObject.password === data.password) {
          navigation("/");
          const loggedInUser: LoginInfoType = {
            user: data.email,
            isLoggedIn: true,
          };
          localStorage.setItem("loginInfo", JSON.stringify(loggedInUser));
        } else {
          alert("Password is wrong");
        }
      } else {
        alert("User does not exists");
      }
    }
  };
  useEffect(() => {
    const userLoggin: string | null = localStorage.getItem("loginInfo");
    if (userLoggin) {
      const convertedInfo: LoginInfoType = JSON.parse(userLoggin);
      if (convertedInfo.isLoggedIn) {
        navigation("/");
      }
    }
  }, [navigation]);

  return (
    <div className="h-screen flex">
      <img className="flex-1 object-cover" src="/loginnn.jpg" alt="" />
      <form
        onSubmit={handleSubmit(handleSubmitLoginForm)}
        className="flex-1 px-10 py-4 w-full"
        action=""
      >
        <h3 className="flex justify-center text-xl font-bold text-rose-600">
          Login !
        </h3>
        <div className="py-3 flex flex-col gap-2">
          <Textfield
            type="email"
            placeholder="JohnsenJames@text.com"
            label="Enter Your Email"
            validation={register("email")}
            helperText={<> {errors.email?.message ?? ""} </>}
          />

          <Textfield
            type="password"
            label="Enter Your Password"
            validation={register("password")}
            helperText={<>{errors.password?.message ?? ""}</>}
          />
        </div>
        <Button varient="outline" type="submit">
          Log in
        </Button>
        <Link to="/auth/register"> Don't have an account ?</Link>
      </form>
    </div>
  );
};
export default LoginPage;

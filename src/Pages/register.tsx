import { type FC } from "react";
import Textfield from "../Component/textfield";
import Button from "../Component/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export interface FormTypes {
  name?: string;
  email: string;
  gender?: string | null;
  address?: string;
  phoneNumber?: string;
  password?: string;
  passwordConfirmation?: string;
}

const registerSchema = yup.object({
  name: yup.string(),
  email: yup
    .string()
    .required("Email field shouldn't be empty")
    .email("Your email is not valid !"),
  gender: yup.string().nullable(),
  address: yup.string(),
  phoneNumber: yup.string(),
  password: yup.string().required("Password field shouldn't be empty").min(5),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const RegisterPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const navigate = useNavigate();
  const handleSubmitForm = (data: FormTypes): void => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/auth/login");
  };

  return (
    <div className="h-screen flex">
      <img className="flex-1 object-cover" src="/register.jpg" alt="" />
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex-1 px-10 py-4 w-full"
        action=""
      >
        <h3 className="flex justify-center text-xl font-bold text-rose-600">
          {" "}
          Sign Up Form!{" "}
        </h3>
        <div className="py-3 flex flex-col gap-2">
          <Textfield
            type="text"
            label="Name"
            placeholder="Johnsen James"
            validation={register("name")}
          />
          <Textfield
            type="email"
            placeholder="JohnsenJames@text.com"
            label="Email"
            validation={{ ...register("email") }}
            helperText={<> {errors.email?.message ?? ""} </>}
          />
          <div className="flex gap-10 items-center">
            <label className="font-medium text-md"> Gender </label>
            <Textfield
              type="radio"
              name="gender"
              label="Male"
              value="male"
              id="male"
              validation={register("gender")}
            />
            <Textfield
              value="female"
              type="radio"
              name="gender"
              id="female"
              label="Female"
              validation={register("gender")}
            />
          </div>
          <Textfield
            type="text"
            placeholder="Address"
            label="Address"
            validation={register("address")}
          />
          <Textfield
            type="tel"
            placeholder="09*********"
            label="Phone Number"
            validation={register("phoneNumber")}
          />
          <Textfield
            type="password"
            placeholder="At least 5 characters"
            label="Password"
            validation={register("password")}
            helperText={<>{errors.password?.message ?? ""}</>}
          />
          <Textfield
            type="password"
            placeholder="Johnsen"
            label="Repeat Password"
            validation={register("passwordConfirmation")}
            helperText={<>{errors.passwordConfirmation?.message ?? ""}</>}
          />
        </div>
        <Button type="submit"> Sign Up </Button>
      </form>
    </div>
  );
};
export default RegisterPage;

import { type FC, useState, useEffect } from "react";
import { FormTypes } from "./register";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  const [user, setUser] = useState<FormTypes>({
    name: "",
    email: "",
    gender: "",
    address: "",
    phoneNumber: "",
  });

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const stringData = localStorage.getItem("user");
    if (stringData) {
      setUser(JSON.parse(stringData));
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setAllUsers(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <h1 className="m-10 flex">
        WELCOME {user.name} <img src="./sign.png" alt="" className=" h-6" />
      </h1>
      <div className="border-2 bg-slate-200 w-full px-10 py-2 flex justify-between">
        <p> Name </p>
        <p className="px-5"> Email </p>
        <p> Phone Number </p>
        <p> Address </p>
        <p></p>
      </div>
      {allUsers?.map(({ name, email, phone, address }) => (
        <>
          <div className="w-full flex justify-between px-2 py-1">
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address["street"]}</p>
            <Link to="" className="flex">
              <img src="./edit.png" alt="" className="h-5" />
              <img src="./delete.png" alt="" className="h-5" />
            </Link>
          </div>
          <div className=" my-1 w-full border-t-2 border-rose-200"></div>
        </>
      ))}
      <div className="w-full flex justify-between px-2">
        <p> {user.name} </p>
        <p> {user.email} </p>
        <p> {user.phoneNumber} </p>
        <p> {user.address} </p>
        <Link to="" className="flex">
          <img src="./edit.png" alt="" className="h-5" />
          <img src="./delete.png" alt="" className="h-5" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

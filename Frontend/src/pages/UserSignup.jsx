import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
// import  UserContext  from "./../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="px-5 py-5 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-20 mb-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => submitHandler(e)}
          className="bg-white p-4 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium mb-2 flex justify-start">
            What's Your Name
          </h3>
          <div className="flex gap-2 mb-5">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              required
              className="bg-[#eeeeee]  w-full  rounded px-4 py-2 border  text-lg placeholder:text-base"
              placeholder="First Name"
            />

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required
              className="bg-[#eeeeee]  w-full  rounded px-4 py-2 border  text-lg placeholder:text-base"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2 flex justify-start">
            What's your email
          </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="youremail@gmail.com"
          />
          <h3 className="text-lg font-medium mb-2 flex justify-start">
            Enter Password
          </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password"
          />
          <button className="bg-[#111] rounded px-4 py-2  w-full text-white font-semibold text-lg placeholder:text-base">
            Create account
          </button>
          <p className="mt-3 text-center-align">
            Already have a account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[9px]">
          This site is protected by reCAPTCHA and the{" "}
          <span className="text-blue-600 underline">Google Privacy Policy</span>{" "}
          and <span className="underline">Terms of service apply</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptionDataContext } from "../context/CaptionContext";

const CaptionLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { caption, setCaption } = useContext(CaptionDataContext);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const captionData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captions/login`,
      captionData
    );

    if (response.status === 200) {
      const data = response.data;
      setCaption(data.caption);
      localStorage.setItem("token", data.token);
      navigate("/caption-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="px-7 py-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-20 mb-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt=""
        />
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium mb-2 flex justify-start">
            What's your email
          </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-1 border w-full text-lg placeholder:text-base"
            placeholder="youremail@gmail.com"
          />
          <h3 className="text-lg font-medium mb-2 flex justify-start">
            Enter Password
          </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base"
            type="password"
            required
            placeholder="Password"
          />
          <button className="bg-[#111] rounded px-4 py-2  w-full text-white font-semibold text-lg placeholder:text-base">
            Login
          </button>
          <p className="mt-3 text-center-align">
            Join a Fleet?{" "}
            <Link to="/caption-signup" className="text-blue-600">
              Register as a Caption
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] rounded px-4 py-2 flex items-center justify-center mb-5  w-full text-white font-semibold text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptionLogin;

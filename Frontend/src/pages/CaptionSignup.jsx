import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { CaptionDataContext } from "../context/CaptionContext";

const CaptionSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();

  const { caption, setCaption } = React.useContext(CaptionDataContext);

  const captionSubmitHandler = async (e) => {
    e.preventDefault();
    const captionData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captions/register`,
      captionData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaption(data.caption);
      localStorage.setItem("token", data.token);

      navigate("/caption-home");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehicleType("");
    setVehiclePlate("");
    setVehicleCapacity("");
  };
  return (
    <div className="px-2  flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-20 mb-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt=""
        />
        <form
          onSubmit={(e) => captionSubmitHandler(e)}
          className="bg-white p-2 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium mb-2 flex justify-start">
            What's our Caption's name
          </h3>
          <div className="flex gap-2 mb-5">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              required
              className="bg-[#eeeeee]  w-full rounded px-4 py-2 border  text-lg placeholder:text-base"
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
            What's your Caption's email
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

          <h3 className="text-lg font-medium mb-2 flex justify-start">
            Vehicle Information
          </h3>
          <div className="flex gap-2 mb-5">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              required
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm"
              placeholder="Vehicle Color"
            />

            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              required
              className="bg-[#eeeeee]  w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-sm"
              placeholder="Vehicle Number"
            />
          </div>

          <div className="flex gap-2 mb-5">
            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              required
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm"
              placeholder="Vehicle Capacity"
            />

            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-lg "
            >
              <option
                className="text-gray-400 placeholder:text-sm"
                value=""
                disabled
              >
                Vehicle Type
              </option>
              <option value="car">auto</option>
              <option value="bike">motercycle</option>
              <option value="bus">car</option>
            </select>
          </div>
          <button className="bg-[#111] rounded px-4 py-2  w-full text-white font-semibold text-lg placeholder:text-base">
            Create Caption Account
          </button>
          <p className="mt-3 text-center-align">
            Already have a account?{" "}
            <Link to="/caption-login" className="text-blue-600">
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

export default CaptionSignup;

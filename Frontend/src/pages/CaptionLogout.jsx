import React from "react";
import { CaptionDataContext } from "../context/CaptionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptionLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captions/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/caption-login");
      }
    });

  return <div>logout</div>;
};

export default CaptionLogout;

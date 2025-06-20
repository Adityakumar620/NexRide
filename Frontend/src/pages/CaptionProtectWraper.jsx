// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CaptionDataContext } from "../context/CaptionContext";
// import axios from "axios";

// const CaptionProtectWrapper = ({ children }) => {
//   const navigate = useNavigate();
//   const { caption, setCaption } = useContext(CaptionDataContext);
//   const [isLoading, setIsLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) {
//       navigate("/caption-login");
//     }
//   }, [token]);

//   axios
//     .get(`${import.meta.env.VITE_BASE_URL}/captions/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })

//     .then((response) => {
//       if (response.status === 200) {
//         // const data = response.data;
//         setCaption(response.data.caption);
//         setIsLoading(false);
//       }
//     })

//     .catch((err) => {
//       // console.error(err);
//       localStorage.removeItem("token");
//       navigate("/caption-login");
//     }, [token]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>;
// };

// export default CaptionProtectWrapper;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptionDataContext } from "../context/CaptionContext";
import axios from "axios";

const CaptionProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { caption, setCaption } = useContext(CaptionDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    // If no token, redirect to login
    if (!token) {
      setIsLoading(false);
      navigate("/caption-login");
      return;
    }

    // Fetch user profile
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captions/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaption(response.data.caption);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        localStorage.removeItem("token");
        setIsLoading(false);
        navigate("/caption-login");
      });
  }, [token, navigate, setCaption]); // Dependencies for useEffect

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptionProtectWrapper;

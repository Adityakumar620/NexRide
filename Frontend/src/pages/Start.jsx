import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] pt-9 flex justify-between flex-col  w-full">
      <img
        className="w-16 ml-8"
        src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png"
        alt="logo"
      />
      <div className="bg-white py-4 px-4 pb-7">
        <h2 className="text-[25px] font-bold">Get started with Uber</h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Start;

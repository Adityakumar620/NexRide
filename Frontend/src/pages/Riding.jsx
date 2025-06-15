import React from "react";
import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen">
        <Link to="/home" className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className=" text-lg font-medium ri-home-4-fill"></i>
        </Link>
      <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.dribbble.com/users/844221/screenshots/4539927/attachments/1027442/uber-search-2.png?resize=400x300&vertical=center"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />

          <div className="text-right font">
            <h2 className="text-lg font-medium">Anurag</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">BR 01 0001</h4>
            <p className="text-sm text-gray-700">Audi 800</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center flex-col">
          <div className="w-full mt-3">
           
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-range-line"></i>
              <div>
                <h3 className="text-lg font-medium">43/154-S</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Hajipur Lalgnaj, Patna, Bihar
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <i className="ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹ 234.33</h3>
              </div>
            </div>
          </div>
        </div>
        <button className=" mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg ">Make a payment</button>
      </div>
    </div>
  );
}

export default Riding;

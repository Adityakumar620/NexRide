import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="p-3 text-center absolute top-0  w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="font-semibold text-2xl">Confirm Your Ride</h3>

      <div className="flex gap-2 justify-between items-center flex-col">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />

        <div className="w-full mt-3">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kanchanpur Dhanushi, Patna, Bihar
              </p>
            </div>
          </div>

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

        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className=" mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg "
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;

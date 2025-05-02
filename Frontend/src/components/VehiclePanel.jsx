import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-3 text-center absolute top-0  w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl items-center justify-between p-2"
      >
        <img
          className="h-12 mx-2"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png"
          alt="car"
        />
        <div className="w-full">
          <h4 className="font-medium text-base">
            Moto
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motercycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹62.4</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl items-center justify-between p-2"
      >
        <img
          className="h-12 mx-2"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt="car"
        />
        <div className="w-full">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹132.4</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 mb-2 active:border-black rounded-xl items-center justify-between p-2"
      >
        <img
          className="h-12 mx-2"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="car"
        />
        <div className="w-full">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹112.4</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;

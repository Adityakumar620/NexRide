import React from "react";

function RidePopUp(props) {
  return (
    <div>
      <h5 className="text-2xl font-semibold p-2">New Ride Available!</h5>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-2 text-center absolute top-0  w-[93%]"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-start gap-3  rounded-lg p-3">
          <img
            className="h-12 w-12 rounded-full cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hr_-wI4i9ZJGiqGkCrTpfRIrR96IWIfSYg&s"
            alt=""
          />
          <h4 className="text-xl font-medium">Anurag Verma</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">₹296.4</h4>
          <p className="text-sm font-semibold text-gray-600">10.34 KM</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col ">
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
        </div>
        <div className=" w-full flex mt-5 items-center justify-between">

        <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className=" mt-3 bg-gray-200 text-black font-semibold p-3 px-10 rounded-lg "
          >
            Ignore
          </button>

          <button onClick={() => {
            props.setConfirmRidePopupPanel(true)
          }} className=" mt-3  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg ">
            Accept
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default RidePopUp;

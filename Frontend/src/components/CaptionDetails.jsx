import React from "react";

function CaptionDetails() {
  return (
    <div>
        <div className="flex items-center justify-between gap-5">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hr_-wI4i9ZJGiqGkCrTpfRIrR96IWIfSYg&s"
            alt=""
          />
          <h4 className="text-lg font-medium">Anurag Verma</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹296.4</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className=" p-6 mt-8 bg-gray-100 rounded-xl flex items-center justify-evenly">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-700">Hours Onlne</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-700">Hours Onlne</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-book-open-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-700">Hours Onlne</p>
        </div>
      </div>
    </div>
      
  );
}

export default CaptionDetails;

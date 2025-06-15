import React from 'react';
import {Link} from "react-router-dom"

function CaptionRiding() {
    return ( 
        <div className="h-screen">
        <div className="fixed p-3 top-0 flex items-center justify-between w-full">
          <img
            className="w-16"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <Link
            to="/home"
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className=" text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
  
        <div className="h-4/5 ">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.dribbble.com/users/844221/screenshots/4539927/attachments/1027442/uber-search-2.png?resize=400x300&vertical=center"
            alt=""
          />
        </div>
  
        <div className="h-1/5 p-6 bg-gray-200 flex items-center justify-between">
            <h4 className='text-xl '>4 KM Away</h4>
            <button className=" mt-3  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg ">
                Complete ride
            </button>
        </div>
  
      </div>
     );
}

export default CaptionRiding;
import React,{useState, useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import CaptionDetails from "../components/CaptionDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

function CaptionHome() {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function () {
    if(ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform:"translatey(0)",
      });
    }else{
      gsap.to(ridePopupPanelRef.current, {
        transform: "translatey(100%)"
      })
    }
  },[ridePopupPanel])

  useGSAP(function () {
    if(confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform:"translatey(0)",
      });
    }else{
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: "translatey(100%)"
      })
    }
  },[confirmRidePopupPanel])


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

      <div className="h-3/5 ">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.dribbble.com/users/844221/screenshots/4539927/attachments/1027442/uber-search-2.png?resize=400x300&vertical=center"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptionDetails />
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12">
         <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>

      <div ref={confirmRidePopupPanelRef} className="fixed w-full z-10 bottom-0 h-screen translate-y-full  bg-white px-3 py-10 pt-12">
         <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel}  setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
}

export default CaptionHome;

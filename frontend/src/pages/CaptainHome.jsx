import React, { useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [RidePopUpPanel, setRidePopUpPanel] = useState(true);
  const RidePopUpPanelRef = React.useRef(null);
  const [ConfirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ConfirmRidePopUpPanelRef = React.useRef(null);

  useGSAP(
    function () {
      if (RidePopUpPanel) {
        gsap.to(RidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(RidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [RidePopUpPanel]
  );

  useGSAP(
    function () {
      if (ConfirmRidePopUpPanel) {
        gsap.to(ConfirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ConfirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePopUpPanel]
  );

  return (
    <div className="h-screen">
      <div className="flex items-center justify-between w-screen fixed p-6 top-0">
        <img
          className="w-14"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-md ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails></CaptainDetails>
      </div>
      <div
        ref={RidePopUpPanelRef}
        className="fixed w-full z-10 rounded-t-2xl translate-y-full bg-white bottom-0 px-3 py-6"
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        ></RidePopUp>
      </div>
      <div
        ref={ConfirmRidePopUpPanelRef}
        className="fixed w-full z-10 rounded-t-2xl translate-y-full h-screen bg-white bottom-0 px-3 py-6"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        ></ConfirmRidePopUp>
      </div>
    </div>
  );
};

export default CaptainHome;

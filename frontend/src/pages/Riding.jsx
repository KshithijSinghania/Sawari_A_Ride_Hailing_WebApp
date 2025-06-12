import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2"
      >
        <i className="text-lg font-md ri-home-4-fill"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4 ">
        <div className="flex items-center justify-between mb-4">
          <div>
            <img
              className="h-12"
              src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
              alt=""
            />
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold">ABC</h2>
            <h4 className="text-xl font-bold -mt-1">JH01 AB 1234</h4>
            <p className="text-sm font-medium text-gray-600">
              Maruti Suzuki Alto
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-1 justify-between items-center flex-col">
          <div className="w-full  flex flex-col gap-4 mt-3">
            <div className="flex items-center gap-5 border-b-2 border-gray-100 pb-4">
              <h5 className="text-3xl ml-1">
                <i className="ri-map-pin-range-fill"></i>
              </h5>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold">End Point</h2>
                <p className="text-gray-600 text-md font-medium">
                  Ending location
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b-2 border-gray-100 pb-1">
              <h5 className="text-3xl ml-1">
                <i className="ri-cash-line"></i>
              </h5>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold">Cash</h2>
                <p className="text-gray-600 text-md font-medium">Rs1122</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-1 bg-green-700 text-white text-lg font-semibold p-3 rounded-lg mb-3">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;

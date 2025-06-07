import React from 'react'

const FindingCaptainPanel = (props) => {
  return (
    <div>
      <div className='flex items-cols justify-between relative'>
        <h2 className='text-2xl font-semibold mb-5'>Looking for a Driver</h2>
        <h5 onClick={()=>{
          props.setRidePanel(false);
        }} className='text-3xl text-gray-500 cursor-pointer opacity-100'>
        <i className="ri-arrow-down-wide-fill absolute top-0.7 right-5 "></i>
        </h5>
      </div>
      <div className='flex gap-4 mt-1 justify-between items-center flex-col'>
        <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg" alt="" />
      <div className='w-full  flex flex-col gap-4 mt-3'>
        <div className='flex items-center gap-5 border-b-2 border-gray-100 pb-4'>
          <h5 className='text-3xl ml-1'><i className="ri-map-pin-fill"></i></h5>
          <div className='flex flex-col justify-center'>
            <h2 className='text-2xl font-semibold'>Start Point</h2>
            <p className='text-gray-600 text-md font-medium'>Starting location</p>
          </div>
        </div>
        <div className='flex items-center gap-5 border-b-2 border-gray-100 pb-4'>
          <h5 className='text-3xl ml-1'><i className="ri-map-pin-range-fill"></i></h5>
          <div className='flex flex-col justify-center'>
            <h2 className='text-2xl font-semibold'>End Point</h2>
            <p className='text-gray-600 text-md font-medium'>Ending location</p>
          </div>
        </div>
        <div className='flex items-center gap-5 border-b-2 border-gray-100 pb-4'>
          <h5 className='text-3xl ml-1'><i className="ri-cash-line"></i></h5>
          <div className='flex flex-col justify-center'>
            <h2 className='text-2xl font-semibold'>Cash</h2>
            <p className='text-gray-600 text-md font-medium'>Rs1122</p>
          </div>
        </div>
      </div> 

      {/* <button className='w-full mt-5 bg-green-700 text-white text-lg font-semibold p-3 rounded-lg'>Confirm</button> */}
      </div>
    </div>
  )
}

export default FindingCaptainPanel

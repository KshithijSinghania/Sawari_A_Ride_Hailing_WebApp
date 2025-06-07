import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {

  const locations=["24B, Kapoor's Cafe","24B, Indore","IIT Indore","XYZ"];


  return (
    <div>
      {
        locations.map(function(elem,idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 rounded-xl p-3  border-2 border-gray-200 active:border-black  items-center justify-start my-2'>
        <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        })
      }
      
    </div>
  )
}

export default LocationSearchPanel

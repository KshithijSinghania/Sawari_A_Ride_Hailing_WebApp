import React, { useState, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css' 
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanelSearch from '../components/VehiclePanelSearch';
import ConfirmRidePanel from '../components/ConfirmRidePanel';
import FindingCaptainPanel from '../components/FindingCaptainPanel';
import WaitingForCaptainPanel from '../components/WaitingForCaptainPanel';

const HomeNext = () => {

  const [pickup, setPickup] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);
  const VehiclePanelRef=useRef(null)
  const [VehiclePanel,setVehiclePanel]=useState(false);
  const RidePanelRef=useRef(null)
  const [RidePanel,setRidePanel]=useState(false);
  const VehicleFoundRef=useRef(null)
  const [VehicleFound,setVehicleFound]=useState(false);
  const [waitingForDriver,setwaitingForDriver]=useState(false);
  const waitingForDriverRef=useRef(null);

  useGSAP(() => {
    if(panelOpen){
    gsap.to(panelRef.current, {
      height: '70%',
      duration: 0.5,
      ease: 'power2.inOut',
      padding:24
    })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
  }
    else{
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 0.5,
        ease: 'power2.inOut',
        padding:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen]);

  useGSAP(function(){
    if(VehiclePanel){
    gsap.to(VehiclePanelRef.current,{
      transform:'translateY(0)',
    })
  }
  else{
    gsap.to(VehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[VehiclePanel])

  useGSAP(function(){
    if(RidePanel){
    gsap.to(RidePanelRef.current,{
      transform:'translateY(0)',
    })
  }
  else{
    gsap.to(RidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[RidePanel])

  useGSAP(function(){
    if(VehicleFound){
    gsap.to(VehicleFoundRef.current,{
      transform:'translateY(0)',
    })
  }
  else{
    gsap.to(VehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[VehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)',
    })
  }
  else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[waitingForDriver])


  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div  className='h-screen w-screen '>
        <img className='h-full w-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative rounded-t-2xl'>
          <h4 className='text-3xl font-semibold'>Find a Trip</h4>
          <h5 ref={panelCloseRef} className='absolute opacity-0 top-5 right-5 text-3xl text-gray-500 cursor-pointer'  onClick={()=>{
            setPanelOpen(false);
          }}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <form action="" onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <div className='rounded-full absolute h-3 w-3 top-22.75 left-9 bg-black'></div>
          <div className='rounded-full absolute h-3 w-3 top-37.75 left-9 bg-black'></div>
          <div className="line absolute h-17.5 w-1 top-23 left-10 bg-black"></div>
          <input onClick={()=>{
            setPanelOpen(true);
          }} value={pickup} onChange={(e)=>{
            setPickup(e.target.value);
          }} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'/>
          <input onClick={()=>{
            setPanelOpen(true);
          }} value={destination} onChange={(e)=>{
            setDestination(e.target.value);
          }} className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination'/>
        </form>
        </div>
        <div  ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={VehiclePanelRef} className='fixed w-full z-10 translate-y-full rounded-t-2xl bg-white bottom-0 px-3 py-8'>
        <VehiclePanelSearch setRidePanel={setRidePanel} setVehiclePanel={setVehiclePanel}></VehiclePanelSearch>
      </div>
      <div ref={RidePanelRef} className='fixed w-full z-10 translate-y-full rounded-t-2xl bg-white bottom-0 px-3 py-6'>
        <ConfirmRidePanel setVehicleFound={setVehicleFound} setRidePanel={setRidePanel}></ConfirmRidePanel>
      </div>
      <div ref={VehicleFoundRef} className='fixed w-full z-10 translate-y-full rounded-t-2xl bg-white bottom-0 px-3 py-6'>
         <FindingCaptainPanel setRidePanel={setRidePanel}></FindingCaptainPanel>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 rounded-t-2xl bg-white bottom-0 px-3 py-6'>
         <WaitingForCaptainPanel setwaitingForDriver={setwaitingForDriver}/>
      </div>
    </div>
  )
}

export default HomeNext

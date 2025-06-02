import React, { use } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const UserSignup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [name, setname] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullname:{
            firstName: firstName,
            lastName: lastName
            },
            email: email,
            password: password
        });
        setEmail("");
        setPassword("");
        setfirstName("");   
        setlastName("");
        setname("");
    }

    return (
        <div className="p-7 flex flex-col justify-between h-screen">
            <div>
                <img className="w-16 mb-10"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png" alt="" />
            <form action="" onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className="text-base mb-2 font-medium">What's your name</h3>
                <div className="flex gap-2 mb-5">
                    <input className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm " value={firstName} onChange={(e)=>{setfirstName(e.target.value)}} required type="test" placeholder="firstName" />
                    <input className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm " value={lastName} onChange={(e)=>{setlastName(e.target.value)}} type="text" placeholder="lastName" />
                </div>
                <h3 className="text-base mb-2 font-medium">What's your email</h3>
                <input className="bg-[#eeeeee] rounded px-4 py-2 w-full text-base placeholder:text-sm mb-5" value={email} onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="example@email.com" />
                <h3 className="text-base mb-2 font-medium">Enter Password</h3>
                <input className="bg-[#eeeeee] rounded px-4 py-2  w-full text-base placeholder:text-sm mb-5" value={password} onChange={(e)=>{setPassword(e.target.value)}} required type="password" placeholder="password"/>
                <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-3">Login</button>
            </form>
            <p className="text-center mb-2">Already have an account? <Link to='/login' className="text-blue-600">Login</Link></p>
                
            </div>
            
            <div>
            <p className="text-xs text-gray-400 leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates to the number provided.
            </p>
            </div>
        </div>
    )
}

export default UserSignup;
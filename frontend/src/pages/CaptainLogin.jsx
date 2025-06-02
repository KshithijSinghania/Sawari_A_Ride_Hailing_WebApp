import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setcaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setcaptainData({
            email: email,
            password: password
        });
        setEmail("");
        setPassword("");
    }

    return (
        <div className="pl-7 pb-7 pr-7 pt-3 flex flex-col justify-between h-screen">
            <div>
                <img className="w-16 mb-3"  src="https://pngimg.com/d/uber_PNG24.png" alt="" />
            <form action="" onSubmit={(e)=>{submitHandler(e)}}>
                <h3 className="text-lg mb-2 font-medium">What's our Captain's email</h3>
                <input className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base mb-7" value={email} onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="example@email.com" />
                <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
                <input className="bg-[#eeeeee] rounded px-4 py-2  w-full text-lg placeholder:text-base mb-7" value={password} onChange={(e)=>{setPassword(e.target.value)}} required type="password" placeholder="password"/>
                <button className="bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-3">Login</button>
            </form>
            <p className="text-center mb-2">Join a fleet? <Link to='/captain-signup' className="text-blue-600">Register as a captain</Link></p>
                
            </div>
            
            <div>
            <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mb-5">Sign in as User</Link>    
            </div>
        </div>
    )
}

export default CaptainLogin;
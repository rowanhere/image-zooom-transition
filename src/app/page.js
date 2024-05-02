"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Home() {
  const [showPass, setShowPass] = useState(false);
  return (
    <form className="h-[350px] aspect-video  rounded-lg shadow-2xl text-white bg-dark font-mono px-8 py-6">
      <h1 className="text-center text-[2rem]  tracking-wider">Welcome</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-md h-10 bg-transparent border mb-4 outline-none focus:border-2 indent-2"
        />
      </div>
      <div className="relative">
        <label htmlFor="password">Password</label>
        <input
          type={showPass?"text":"password"}
          name="password"
          id="password"
          className="w-full rounded-md h-10 bg-transparent border outline-none focus:border-2 indent-2"
        />
        <button type="button" className="absolute top-[35px] right-[6px]" onClick={()=> setShowPass(prev=>!prev)}>
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button
        type="submit"
        className="text-center w-full h-10 mt-8 border-2 rounded-md "
      >
        Login
      </button>
    </form>
  );
}

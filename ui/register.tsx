"use client";

import { signUp } from "../lib/actions"; // Import the server action

import { useState, useEffect } from "react";
import { validateEmail, getPasswordStrength } from "@/lib/validations";
const Register = () => {
  return (
    <div className="text-black bg-[rgba(8,8,8,0.2)] w-screen h-screen flex justify-center">
      <form
        action={signUp}
        className="bg-white w-[600px] h-[800px] mt-[15%] p-[30px] px-[80px] rounded-[10px] flex flex-col items-center "
      >
        <p className="text-[25px] mt-[10px] ">Register</p>
        <p className="mt-[30px]"> Welcome! Please, fill your credentials</p>
        <div className="flex flex-col mt-[20px]  w-full">
          <p className="font-semibold">Username</p>
          <input
            name="username"
            type="username"
            placeholder="Enter username"
            required
            className="bg-gray-200  px-[20px] rounded-[10px] mt-[5px] h-[50px]  flex items-center "
          ></input>
        </div>
        <div className="flex flex-col mt-[20px]  w-full">
          <p className="font-semibold">Email</p>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            required
            className="bg-gray-200  px-[20px] rounded-[10px] mt-[5px] h-[50px] flex items-center "
          ></input>
        </div>
        <div className="flex flex-col mt-[20px]  w-full">
          <p className="font-semibold">Password</p>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            required
            className="bg-gray-200  px-[20px] rounded-[10px] mt-[5px] h-[50px] flex items-center "
          ></input>
        </div>
        <div className="flex flex-col mt-[20px]  w-full">
          <p className="font-semibold">Repeat Password</p>
          <input
            type="password"
            placeholder="Repeat password"
            className="bg-gray-200  px-[10px] rounded-[10px] mt-[5px] h-[50px] flex items-center "
          ></input>
        </div>

        <div className="flex flex-col mt-[40px]  w-full">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-500 transition-all duration-300 font-semibold flex items-center text-white justify-center text-[rgba(0,0,0,0.6)] px-[10px] rounded-[10px] mt-[5px] h-[50px] flex items-center "
          >
            Register
          </button>
        </div>
        <div className="flex flex-col mt-[0px]  w-full">
          <div className="   flex items-center  justify-center  px-[10px] rounded-[10px] mt-[5px] h-[50px] flex items-center ">
            <p>Already have an account?</p>
            <p className="ml-[5px] font-semibold text-blue-700 hover:text-blue-500  transition-all duration-300">
              Login
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;

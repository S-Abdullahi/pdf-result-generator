import React from "react";
import readmodel from "../readmodel2.svg";
import { IoIosBasketball } from "react-icons/io";
import { Link } from "react-router-dom";

const Instruction = () => {
  return (
    <div>
      <nav className="flex justify-center items-center p-4 bg-red-400 text-white">
        <h2 className="text-xl">Read Model College</h2>
      </nav>
      <h2 className="text-center text-2xl mt-20 uppercase">
        Follow the following instruction to use the system
      </h2>
      <ul className="text-center flex flex-col items-start mx-auto mt-10 text-x w-2/5 p-4 shadow-md">
        <li className="list-con">
          <IoIosBasketball className="mr-5 text-red-500" />
          <p>Click on the next button after reading the instruction</p>{" "}
        </li>
        <li className="list-con">
          <IoIosBasketball className="mr-5 text-red-500" />
          <p>Convert the result you want to generate into json file</p>
        </li>
        <li className="list-con">
          <IoIosBasketball className="mr-5 text-red-500" />
          <p>Ensure you follow the standard format provided</p>
        </li>
        <li className="list-con">
          <IoIosBasketball className="mr-5 text-red-500" />
          <p>Copy and Paste the json in the input field provided</p>
        </li>
        <li className="list-con">
          <IoIosBasketball className="mr-5 text-red-500" />{" "}
          <p>Click on generate result</p>
        </li>
        <Link to='/inputpage'>
          <button className="btn">NEXT</button>
        </Link>
      </ul>
    </div>
  );
};

export default Instruction;

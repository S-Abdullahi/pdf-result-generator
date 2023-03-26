import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const InputPage = () => {
  const { resultArray, setResultArray, inputData, setInputData } =
    useGlobalContext();
  return (
    <>
      <nav className="flex justify-center items-center p-4 bg-red-400 text-white">
        <h2 className="text-xl">Read Model College</h2>
      </nav>
      <div className="flex flex-col items-center mt-40">
        <input type='file'/>
        {/* <textarea
          placeholder="paste json text here"
          className="w-2/4 h-60 bg-slate-100 rounded p-4 text-xl shadow-md focus:outline-none focus:border-2 focus:border-red-300"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        /> */}
        <Link to="/result">
          <button
            className="btn"
            onClick={() => {
            //   console.log(inputData);
              setResultArray(inputData);
            //   console.log(resultArray)
            }}
          >
            Generate result
          </button>
        </Link>
      </div>
    </>
  );
};

export default InputPage;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import testing from "../Testing";

const InputPage = () => {
  const { resultArray, setResultArray, inputData, setInputData } =
    useGlobalContext();
  const [data, setData] = useState(null);

  const fileRef = useRef();
  const onChangeFile = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const updatedJSON = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const parsedData = JSON.parse(content);
        setData(parsedData);
        setInputData(parsedData);
      };
      reader.readAsText(updatedJSON);
    }
  };
  console.log(data);
  console.log(inputData);
  return (
    <>
      <nav className="flex justify-center items-center p-4 bg-red-400 text-white">
        <h2 className="text-xl">Read Model College</h2>
      </nav>
      <div className="flex flex-col items-center mt-40">
        <input type="file" onChange={onChangeFile} ref={fileRef} />
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
              console.log(inputData);
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

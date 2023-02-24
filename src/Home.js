import React from "react";
import readmodel from "./readmodel.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex m-10 flex-col items-center">
      <img src={readmodel} alt="read model" className="w-40 h-40" />
      <h2 className="text-5xl mt-10">Read Model College</h2>
      {/* <h2 className="text-5xl mt-10">Result Generator</h2> */}

      <Link to='/instruction'>
        <button className="btn">
          Get started
        </button>
      </Link>
    </main>
  );
};

export default Home;

// import { click } from "@testing-library/user-event/dist/click";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGIF from "./hooks/useGIF";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const { gif, loading, fetchData } = useGIF();

  return (
    <div className="flex flex-col items-center bg-white md:w-1/2 w-11/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h1 className="uppercase font-bold text-2xl underline ">
        {" "}
        A RANDOM GIF{" "}
      </h1>
      {loading ? <Spinner /> : <img src={gif} width={450} alt="" />}
      <button
        className="uppercase hover:scale-95 transition-all duration-200 bg-black text-white w-10/12 rounded-lg font-normal py-2 text-xl"
        onClick={() => fetchData()}
      >
        Genarate{" "}
      </button>{" "}
    </div>
  );
};

export default Random;

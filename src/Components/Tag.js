// import { click } from "@testing-library/user-event/dist/click";
// import axios from "axios";
import React, { useState } from "react";
import Spinner from "./Spinner";
import useGIF from "./hooks/useGIF";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("Cat");
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imgSrch = data.data.images.downsized_large.url;
  //   setGif(imgSrch);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const { gif, loading, fetchData } = useGIF(tag);
  // function clickHandler(event) {
  //   fetchData();
  // }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="flex flex-col items-center bg-black text-white md:w-1/2 w-11/12 rounded-lg border-2 border-white gap-y-5 mt-[15px] mx-auto py-5">
      <h1 className="uppercase font-bold text-2xl underline ">
        RANDOM {tag} GIF
      </h1>

      {loading ? <Spinner /> : <img src={gif} width={450} alt="" />}
      <div className="w-full flex items-center flex-col gap-y-3 ">
        <input
          type="text"
          className="py-3 text-black rounded-lg text-center font-boldff w-10/12 px-3 outline-0 "
          placeholder="Yors search..."
          value={tag}
          onChange={changeHandler}
        />
        <button
          className="uppercase hover:scale-95 transition-all duration-200 text-black font-bold bg-[#F0F0F0] w-10/12 rounded-lg  py-2 text-xl"
          onClick={() => fetchData()}
        >
          Genarate
        </button>{" "}
      </div>
    </div>
  );
};

export default Tag;

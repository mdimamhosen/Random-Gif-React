import "./App.css";
import Random from "./Components/Random";
import Tag from "./Components/Tag";
function App() {
  return (
    <div className="flex flex-col w-screen h-screen background items-center overflow-x-hidden py-8">
      <h1 className="w-11/12 bg-gray-600 text-white rounded-lg text-center py-2 px-10 text-3xl font-bold uppercase">
        Random GIFS
      </h1>
      <div className="flex flex-col justify-center w-full items-center mt-[30px] gap-y-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;

import Image from "next/image";

const Home = () => {
  return (
    <div className="container h-screen p-3 flex items-center bg-gradient-to-br from-white to-red-700 pt-28">
      <div className="p-16 w-1/2">
        <h1 className="text-3xl font-semibold">HI, I'M Muslim</h1>
        <h2 className="text-7xl font-bold">I'M A <br/>WEB/APP <br/> DEVELOPER</h2>
        <p className="text-lg text-gray-900">I create beautiful and interactive websites. My technology <br/> stack includes HTML, CSS, and JavaScript. I am proficient <br/> in working with frameworks such as React and Vue.js and <br/> creating responsive layouts.</p>
      </div>
      <div>
        <img src="/coder.svg" alt="image" width={600} height={400}></img>
      </div>
    </div>
  );
};

export default Home;
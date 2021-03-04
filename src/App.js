import React from "react";
import Slider from "./components/Slider";
import Placeholder from "./components/Placeholder";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="w-full mx-auto p-6 rounded-lg shadow-xl">
      <h1 className="text-4xl text-bold text-center text-blue-900 mb-4">React Tailwind CSS based Slider</h1>
      <div className="p-4 flex items-center justify-center">
        <Slider>
          <h2>This is a heading.</h2>
          <Placeholder />
          <img src={logo} />
        </Slider>
      </div>
    </div>
  );
}

export default App;

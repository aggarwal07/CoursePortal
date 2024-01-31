import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reset from "./Reset";
import Search from "../Search/Search";

const Header = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [buttonStyle, setButtonStyle] = useState({ display: "block" });

  const handleLogin = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userRoll", roll);
    setButtonStyle({ display: "none" });
  };

  return (
    <div className="w-full h-28 bg-cyan-400 shadow-2xl rounded-lg flex items-center justify-between p-8">
      <div className="">
      <Search  />
      
      </div>

      <h1 className="text-white font-extrabold text-3xl">
        <Link className="nav-link active" to="/">
          Welcome To Registration Portal
        </Link>
      </h1>

      <div className="flex items-center">
        <div className="flex flex-col">
          <input
            className="border p-2 w-60 h-8 text-lg rounded-lg font-semibold"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border p-2 w-60 h-8 mt-2 text-lg rounded-lg font-semibold"
            placeholder="Roll Number"
            type="text"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <button
          style={buttonStyle}
          className="bg-blue-500 text-white p-2 h-18 ml-2 rounded-md cursor-pointer"
          onClick={handleLogin}
        >
          Go
        </button>
        <div className="ml-28">
          <Reset />
        </div>
      </div>
    </div>
  );
};

export default Header;

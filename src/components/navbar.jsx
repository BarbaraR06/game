import React from "react";
import "../App.css";
import navbar from "../assets/navbar.svg";

const Navbar = ({ playerScore, computerScore }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-center overflow-hidden overflow-y-hidden ">
      <img
        src={navbar}
        alt="navbar"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative text-red-50 text-center mb-12">
        <div className="ml-auto mr-4 flex flex-row gap-6 justify-center items-center ">
          <p className="text-xl">🐶 Player: {playerScore} </p>
          <p className="text-xl"> 💻 Computer: {computerScore} </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

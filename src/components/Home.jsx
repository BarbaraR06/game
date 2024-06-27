import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Music from "./music";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
import api from "./api.jsx";

const Home = () => {
  
  const apiKey = api.apiKey;

  const videoUrl =
    "https://www.youtube.com/watch?v=_dszbTfcFhk&ab_channel=LofiHammy";

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="inline-flex">
        <img
          src={star1}
          className="absolute w-10 top-10- left-40 animate-spin-slow"
          alt="star1"
        />
        <img
          src={star2}
          className="absolute w-5 top-96 left-[600px] animate-spin-slow"
          alt="star2"
        />
        <img
          src={star2}
          className="absolute w-5 top-20 left-[70px] animate-spin-slow"
          alt="star3"
        />
        <img
          src={star1}
          className="absolute w-10 top-[100px] left-[600px]  animate-spin-slow"
          alt="star4"
        />
      </div>
      <div className="justify-center items-center flex flex-col">
        <img src={logo} className="w-64 mb-10" alt="logo" />
        <button
          className="button bg-[#F9466B]"
          style={{ textDecoration: "none" }}>
          <Link
            to="/game"
            style={{ textDecoration: "none" }}
            className="text-[#FAF2E8] ">
            START
          </Link>
        </button>
        <h3 className="mt-8">Made with 💗 by Barbie</h3>
      </div>
      <Music apiKey={apiKey} videoUrl={videoUrl} />
    </div>
  );
};

export default Home;

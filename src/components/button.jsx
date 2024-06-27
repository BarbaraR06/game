import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/game");
  };

  return (
    <button className="button" onClick={handleRedirect}>
      START
    </button>
  );
};

export default Button;

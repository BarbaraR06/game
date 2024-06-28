import React, { useState } from "react";
import "../App.css";
import piedra from "../assets/piedra.svg";
import papel from "../assets/papel.svg";
import tijera from "../assets/tijera.svg";
import Navbar from "./navbar";
import bubbleSound from "../assets/bubbleSound.mp3";
import reset from "../assets/reset.svg";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  //para el marcador de puntaje
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  //para las predicciones
  const [lastPlayerChoice, setLastPlayerChoice] = useState(null);


  const choices = [
    { label: "Rock", image: piedra },
    { label: "Paper", image: papel },
    { label: "Scissors", image: tijera },
  ];

  //sonido de hover para los botones
  const playHoverSound = () => {
    const audio = new Audio(bubbleSound);
    audio.play();
  };

  //predicciones de jugada
  const getCounterChoice = (choice) => {
    switch (choice) {
      case "Piedra":
        return "Papel";
      case "Papel":
        return "Tijera";
      case "Tijera":
        return "Piedra";
      default:
        return choices[Math.floor(Math.random() * choices.length)].label;
    }
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "¡Draw!";
    }
    if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      return "¡Player wins!";
    }
    return "¡Computer wins!";
  };

  const handleClick = (choice) => {
    const computerChoice = lastPlayerChoice
      ? getCounterChoice(lastPlayerChoice)
      : choices[Math.floor(Math.random() * choices.length)].label;
    const result = determineWinner(choice, computerChoice);
    setResult(result);

    if (result === "¡Player wins!") {
      setPlayerScore(playerScore + 1);
    } else if (result === "¡Computer wins!") {
      setComputerScore(computerScore + 1);
    }

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setLastPlayerChoice(choice);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setLastPlayerChoice(null);
  };

  return (
    <div className="text-center">
      <Navbar playerScore={playerScore} computerScore={computerScore} />
      {result && (
        <div className="-mb-20 mt-32 text-gray-700">
          <p className="text-2xl">{`Player choice: ${playerChoice}`}</p>
          <p className="text-2xl">{`Computer choice: ${computerChoice}`}</p>
          <p className="text-3xl font-bold mt-4">{result}</p>
        </div>
      )}
      <div className="mt-28 flex justify-center space-x-8">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="flex flex-col items-center focus:outline-none transform transition-transform duration-300 hover:scale-110"
            onClick={() => handleClick(choice.label)}
            onMouseEnter={playHoverSound}>
            <img src={choice.image} alt={choice.label} className="w-32 mb-2" />
            <h2 className="text-stone-700">{choice.label}</h2>
          </button>
        ))}
      </div>
      <div className="fixed right-0 mr-8 mb-8 top-2">
        <button
          className="focus:outline-none transform transition-transform duration-300 hover:scale-110"
          onClick={resetGame}
          onMouseEnter={playHoverSound}>
          <img src={reset} alt="Reset Game" className="w-10 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Game;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Game from "./components/Game.jsx";
import Music from "./components/music.jsx";
import api from "./components/api.jsx";

const App = () => {
  const apiKey = api.apiKey;

  const videoUrl =
    "https://www.youtube.com/watch?v=_dszbTfcFhk&ab_channel=LofiHammy";

  return (
    <div className="App">
      <Router>
        <Music apiKey={apiKey} videoUrl={videoUrl} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

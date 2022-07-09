import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PokemonCards from "./components/PokemonCards";

export function App() {
  //state for current score
  const [score, setScore] = useState(0);

  //state for high score
  const [highScore, setHighScore] = useState(0);

  //state for clicked pokemon
  const [chosenPokemon, setChosenPokemon] = useState([]);

  //function for click
  function clickPokemon(e) {
    if (!chosenPokemon.includes(e.target.id)) {
      setChosenPokemon((arr) => [...arr, e.target.id]);
      setScore(score + 1);
    }

    if (chosenPokemon.includes(e.target.id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setChosenPokemon([]);
    }

    if (chosenPokemon.length === 12) {
      setScore(0);
      setChosenPokemon([]);
      setHighScore(score);
    }
  }

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <PokemonCards clickPokemon={clickPokemon} />
    </div>
  );
}

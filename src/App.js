import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PokemonCards from "./components/PokemonCards";

export function App() {
  //state for current score
  const [score, setScore] = useState(0);

  //state for high score
  const [highScore, setHighScore] = useState(0);

  //state for game status
  const [gameStatus, setGameStatus] = useState();

  //state for clicked pokemon
  const [chosenPokemon, setChosenPokemon] = useState([]);

  //function for click
  function clickPokemon(e) {
    if (!chosenPokemon.includes(e.target.id)) {
      setChosenPokemon((arr) => [...arr, e.target.id]);
      setScore(score + 1);
      if (score > highScore) {
        setHighScore(score);
      } else {
        setHighScore(highScore);
      }
    } else {
      setScore(0);
      setHighScore(score + 1);
    }
  }

  console.log(chosenPokemon);
  console.log(`Score is ${score}`);
  console.log(`Highscore is ${highScore}`);

  return (
    <div>
      <Header score={score} highScore={highScore} />
      <PokemonCards clickPokemon={clickPokemon} />
    </div>
  );
}

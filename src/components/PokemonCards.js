import React from "react";
import "../styles/PokemonCard.css";
import { pokedex } from "../assets/pokedex";

const PokemonCards = ({ clickPokemon }) => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newPokedex = shuffle(pokedex);

  const pokemons = newPokedex.filter((pokemon) => pokemon);

  const galleryItems = pokemons.map((pokemon) => (
    <div
      onClick={clickPokemon}
      key={pokemon.id}
      id={pokemon.id}
      className="card-container hang-on-hover"
    >
      <img
        className="poke-img"
        src={pokemon.image.thumbnail}
        alt="pokemon"
        id={pokemon.id}
      ></img>
      <h3 id={pokemon.id}>{pokemon.name.english}</h3>
    </div>
  ));

  return <div className="card-gallery">{galleryItems}</div>;
};

export default PokemonCards;

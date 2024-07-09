import React, { useState, useEffect } from "react";
import './index.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(20);

  const fetchAllPokemon = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=1&limit=1302`)
      .then((res) => res.json())
      .then((data) => {
        setAllPokemon(data.results);
        setDisplayedPokemon(data.results.slice(0, 20));
        setLoading(false);
      });
  };

  const loadMorePokemon = () => {
    const newIndex = index + 20;
    setDisplayedPokemon((prev) => [
      ...prev,
      ...allPokemon.slice(index, newIndex),
    ]);
    setIndex(newIndex);
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          <ul>
            {displayedPokemon.map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))}
          </ul>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <button className="load-more" onClick={loadMorePokemon}>
            Load More!
          </button>
        )}
      </div>
    </div>
  );
}

function Card({ pokemon }) {
  const id = pokemon.url.split("/")[pokemon.url.split("/").length - 2];
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });
  }, [id]);

  const getPokePics = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  if (!stats) {
    return null;
  }

  return (
    <li>
      <div className="Pokemon-List">{pokemon.name}</div>
      {stats.stats.map((x, index) => (
        <div key={index}>{x.stat.name}: {x.base_stat}</div>
      ))}
      <img
        src={getPokePics()}
        alt={pokemon.name}
        style={{ height: "4rem", width: "auto" }}
      />
    </li>
  );
}

export default App;

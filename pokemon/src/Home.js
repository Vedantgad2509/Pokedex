import React, { useState, useEffect } from "react";
 
function App() {
  const [id, setId] = useState(0);
  const [allPokemon, setAllPokemon] = useState([]);
  const [allStats, setAllStats] = useState([]);
 
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302")
      .then((res) => res.json()) //saving results in JSON
      .then((data) => setAllPokemon(data.results)); //slapping whatever data we get into the array !
  });
 
  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          <ul>
            {allPokemon.map((pokemon) => (
              <Card pokemon={pokemon} />
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}
 
function Card({ pokemon }) {
  const [id, setID] = useState(
    pokemon.url.split("/")[pokemon.url.split("/").length - 2]
  );
  const [stats, setStats] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        // return data;
      });
  }, []);
  // const PokeStats = url.split("/")[url.split("/").length - 2];
 
  const getPokePics = (url) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };
if(stats==null){
  return<></>
}
  return (
    <div>
      <li key={pokemon.index}>{pokemon.name}</li>
      {stats.stats.map(x=><div>{x.stat.name} {x.base_stat}</div>)}
      <img
        src={getPokePics(pokemon.url)}
        alt=" "
        style={{ height: "4rem", width: "auto" }}
      ></img>
    </div>
  );
}
 
export default App;
import './App.css';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [id, setID] = useState(1);
  const [name, setName] = useState("");
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Could not fetch API!');
        const data = await response.json();
        setName(data.name);
        setStats(data.stats);
        setTypes(data.types.map(typeInfo => typeInfo.type.name));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  const handleNext = () => {
    setID((prevID) => prevID + 1);
  };

  const handleBack = () => {
    setID((prevID) => (prevID > 1 ? prevID - 1 : 1));
  };

  const handlePictures = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'grass':
        return '#78C850';
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'bug':
        return '#A8B820';
      case 'normal':
        return '#A8A878';
      case 'poison':
        return '#A040A0';
      case 'electric':
        return '#F8D030';
      case 'ground':
        return '#E0C068';
      case 'fairy':
        return '#EE99AC';
      case 'fighting':
        return '#C03028';
      case 'psychic':
        return '#F85888';
      case 'rock':
        return '#B8A038';
      case 'ghost':
        return '#705898';
      case 'ice':
        return '#98D8D8';
      case 'dragon':
        return '#7038F8';
      case 'dark':
        return '#705848';
      case 'steel':
        return '#B8B8D0';
      case 'flying':
        return '#A890F0';
      default:
        return '#A8A878';
    }
  };

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pokemon-card"
        >
          <div>
            <p className="title">{name.toUpperCase()}</p>
            {types.map((type, index) => (
              <p key={index} className="type">
                Type: {type}
              </p>
            ))}
            {stats.map((x) => (
              <div key={x.stat.name}>
                <strong>{x.stat.name.toUpperCase()}: </strong>
                <div 
                  className="stat-bar" 
                  style={{ 
                    width: `${x.base_stat}px`, 
                    backgroundColor: getTypeColor(types[0]) 
                  }}
                >
                  {x.base_stat}
                </div>
              </div>
            ))}
          </div>
          <img
            src={handlePictures(id)}
            alt={name}
            className="pokemon-image"
          />
        </motion.div>
      )}
      <div className="button-container">
        <motion.button
          whileHover={{ scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onTap={handleBack} disabled={id === 1}>
          Previous Pokémon
        </motion.button>
        <motion.button
          whileHover={{ scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onTap={handleNext}>
          Next Pokémon
        </motion.button>
      </div>
    </div>
  );
}

export default App;

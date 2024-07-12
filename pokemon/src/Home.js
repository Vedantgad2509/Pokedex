import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import {motion} from "framer-motion";



function App() {
  const [id, setID] = useState(1);
  const [name, setName] = useState("");
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Could not fetch API !');
        const data = await response.json();
        setName(data.name);
        setStats(data.stats);
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

  return (
    <motion.div animate={{x: [0, 100, 0]}}className="container">
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <motion.div animate={{
          scale: [1, 1, 1, 1, 1],
          rotateY: [1, 180,0],
          // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease:"backOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: onabort,
          repeatDelay: 1
        }} className="pokemon-card">
          <div>
           
            <p className="title">{name.toUpperCase()}</p>
            {stats.map((x) => (
              <div key={x.stat.name}>
                <strong>{x.stat.name.toUpperCase()}: </strong>
                <div className="stat-bar" style={{ width: `${x.base_stat}px` }}>{x.base_stat}</div>
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
           whileHover={{
         scale: 0.8,
         transition: { duration: 1 },
         }}
          whileTap={{ scale: 0.9 }}
          onTap={handleBack} disabled={id === 1}>
              Previous Pokémon
           </motion.button>

           <motion.button
            whileHover={{
            scale: 0.8,
            transition: { duration: 1 },
             }}
            whileTap={{ scale: 0.9 }}
            onTap={handleNext} disabled={id >=1302}>
              Next Pokémon
           </motion.button>
      </div>
    </motion.div>
    
  );
}

export default App;

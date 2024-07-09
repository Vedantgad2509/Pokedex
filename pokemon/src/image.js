import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('')
    
      .then(response => {
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // console.log(response.data);
        return response.json();
      })
      .then(data => {
        setData(data.results);
        //console.log(data.results)
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function getPokeid(url){
    const Pokeid = url.split('/').pop();
    console.log(Pokeid);
return 'hello';
  }

  return (
  
    <div className="Home">
      <h2>Fetched Data</h2>
      <ul>
        {data.map((item, index) => (
        <>
          <li className="pokemon-container" key={index}>{item.name}</li>
          <p>{getPokeid(item.url)}</p>
        </>
        ))}
      </ul>
    </div>
  );
}

export default Home;

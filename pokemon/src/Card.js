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


}
export default Card();
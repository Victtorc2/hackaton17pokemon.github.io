import React, { useEffect, useState } from 'react';
import { getAllPokemon, getPokemonByName } from '../services/pokemonService';
import PokemonCard from '../components/PokemonCard';
import Loader from '../components/Loader';
import '../styles/home.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const basicList = await getAllPokemon();
        const detailedData = await Promise.all(
          basicList.map((p) => getPokemonByName(p.name))
        );
        setPokemons(detailedData);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="container py-4">
      <h1 className="text-center mb-4 pokedex-title">🧿 Pokédex React</h1>
      <div className="row">
        {pokemons.map((poke) => (
          <div key={poke.id} className="col-6 col-sm-4 col-md-3 mb-4">
            <PokemonCard pokemon={poke} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

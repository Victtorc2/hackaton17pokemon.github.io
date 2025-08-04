const API_URL = 'https://pokeapi.co/api/v2';

export const getAllPokemon = async () => {
  const res = await fetch(`${API_URL}/pokemon?limit=151`);
  const data = await res.json();
  return data.results; 
};

export const getPokemonByName = async (name) => {
  const res = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await res.json();
  return data;
};

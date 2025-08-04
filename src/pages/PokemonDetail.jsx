import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonByName } from '../services/pokemonService';
import Loader from '../components/Loader';
import '../styles/pokemondetails.css';

const PokemonDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await getPokemonByName(name);
                setPokemon(data);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [name]);

    if (loading) return <Loader />;
    if (!pokemon) return <p>No se encontró el Pokémon.</p>;

    return (
        <div className="container py-4">
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>⬅ Volver</button>

            <div className="card p-3 shadow-sm">
                <div className="text-center">
                    <img
                        src={pokemon.sprites?.other['official-artwork']?.front_default}
                        alt={pokemon.name}
                        style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                    />
                    <h2 className="text-capitalize mt-3">{pokemon.name}</h2>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <h5>Tipos</h5>
                        {pokemon.types.map((t) => (
                            <span key={t.type.name} className="badge bg-primary me-2 text-capitalize">
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <h5>Habilidades</h5>
                        {pokemon.abilities.map((a) => (
                            <span key={a.ability.name} className="badge bg-success me-2 text-capitalize">
                                {a.ability.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <h5>Estadísticas base</h5>
                    <ul className="list-group">
                        {pokemon.stats.map((s) => (
                            <li key={s.stat.name} className="list-group-item d-flex justify-content-between">
                                <span className="text-capitalize">{s.stat.name}</span>
                                <span>{s.base_stat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;

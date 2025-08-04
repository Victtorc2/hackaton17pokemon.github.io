import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pokemoncard.css'; 

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <div className="card text-center shadow-sm pokemon-card" onClick={() => navigate(`/pokemon/${pokemon.name}`)} style={{ cursor: 'pointer' }}>
      <img
        src={pokemon.sprites?.other['official-artwork']?.front_default}
        alt={pokemon.name}
        className="card-img-top mx-auto"
        style={{ width: '120px', height: '120px', objectFit: 'contain', marginTop: '1rem' }}
      />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <p className="card-text">
          {pokemon.types.map((t) => (
            <span key={t.type.name} className="badge bg-primary me-1 text-capitalize">
              {t.type.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;

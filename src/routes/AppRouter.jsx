import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

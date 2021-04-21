import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';
import SinglePokemonPage from '../pages/SinglePokemon';
const AppRoutes: React.FC = () => {
  return (
    <div>
      {/* Nav Component */}
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route
            path='/pokemon/:pokemonName'
            exact
            component={SinglePokemonPage}
          />
        </Switch>
        {/* Footer */}
      </div>
    </div>
  );
};

export default AppRoutes;

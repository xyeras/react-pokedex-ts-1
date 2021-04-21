import React, { useState, useEffect, ChangeEvent } from 'react';
import { pokemonData } from '../data/pokemonData';
import PokemonListItem from '../components/PokemonListItem';

const HomePage: React.FC = () => {

  const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const foundPoke = pokemonData.filter(pk => {
      return pk.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    searchTerm === '' ? setPokemon(pokemonData) : setPokemon(foundPoke);
  }, [searchTerm]);

  // useEffect(()=>{},[])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id='home'>

      <div className='row text-center my-3'>
        <div className='col'>
          <h2>Welcome to the Pokemon Pokedex!</h2>
          <h4 className='text-secondary'>
            The worlds mediumest pokemon database!!
          </h4>
        </div>
      </div>

      <div className='row my-3'>
        <div className='col'>
          <form action=''>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search Pokemon by Name...'
              />
            </div>
          </form>
        </div>
      </div>

      {pokemon.map((mon, i) => {
        return (
          <PokemonListItem pokemon={pokemon} />
        );
      })}
    </div>
  );
};

export default HomePage;

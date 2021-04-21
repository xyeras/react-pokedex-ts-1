import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { pokemonData } from '../data/pokemonData';

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
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
            {pokemon.map((poke, index) => {
              return (
                <li
                  className='list-group-item d-flex justify-content-around align-items-center'
                  key={index}>
                  {/* section img pulled to left */}
                  <img src={poke.img} alt={poke.name} />
                  <div className='poke-info'>
                    <h2>
                      <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
                        {poke.name}
                      </Link>
                    </h2>
                    <div>
                      <small>Height: {poke.height}</small>
                      <small>Weight: {poke.weight}</small>
                    </div>
                  </div>
                  {/* section pokemon name that is wrapped in a link */}
                  {/* section for details under the pokemon name */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

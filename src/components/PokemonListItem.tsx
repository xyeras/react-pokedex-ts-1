import React from 'react';
import { Link } from 'react-router-dom';
import { setTypeColor } from '../services';

interface PokemonListItemProps {
    pokemon: Pokemon[];
}

const PokemonListItem: React.FC<PokemonListItemProps> = ( { pokemon } ) => {

  return (
    <div id='pokemon-list-item'>

      <div className='row d-flex justify-content-center'>
        
        <div className='col-6'>
          <ul className='list-group'>
            {pokemon.map((poke, index) => {
              return (
                <li
                  className='list-group-item d-flex flex-column align-items-center text-center'
                  key={index}>
                  {/* section img pulled to left */}
                  <img src={poke.img} alt={poke.name} />
                  <div className='poke-info'>
                    {/* section pokemon name that is wrapped in a link */}
                    <h2>
                      <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
                        {poke.name}
                      </Link>
                    </h2>
                    <div>
                      <small>Height: {poke.height}</small>
                      {' | '}
                      <small>Weight: {poke.weight}</small>
                    </div>
                    <div>
                      <small className='text-secondary mt-3'>Type:</small>
                      {poke.type.map((t, i) => {
                          return (
                            <span
                              className='badge badge-pill text-white mx-1'
                              style={{ backgroundColor: setTypeColor(t) }}
                              key={i}>
                              {t}
                            </span>
                          );
                        })}
                    </div>
                    <div>
                      <small className='text-secondary mt-3'>Weaknesses:</small>
                      {poke.weaknesses.map((t, i) => {
                          return (
                            <span
                              className='badge badge-pill text-white mx-1'
                              style={{ backgroundColor: setTypeColor(t) }}
                              key={i}>
                              {t}
                            </span>
                          );
                        })}
                    </div>
                  </div>
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

export default PokemonListItem;

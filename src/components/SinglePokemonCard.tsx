import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pokemonData } from '../data/pokemonData';
import { Link } from 'react-router-dom';
import { setTypeColor } from '../services';

const SinglePokemonCard: React.FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon>();
    const { pokemonName } = useParams<{ pokemonName: string }>();
  
    useEffect(() => {
      let foundPokemon = pokemonData.find(
        pd => pd.name.toLowerCase() === pokemonName
      );
      setPokemon(foundPokemon);
      setPokemon(updateEvolution(foundPokemon));
    }, [pokemon, pokemonName]);
  
    const updateEvolution = (poke: Pokemon | undefined) => {
      // check for next_evolution && || prev_evolution
      //  loop through each of the evolution arrays
      // loop through the pokemon data set
      // find the pokemon in pokemonData that matches the evolution pokemon
      // set the evolution.img = pokemon.img
      // return our updatedPoke
  
      if (poke?.next_evolution) {
        poke.next_evolution.map(ne => {
          pokemonData.forEach(pd => {
            if (pd.name === ne.name) {
              ne.img = pd.img;
            }
          });
          return ne;
        });
      }
  
      if (poke?.prev_evolution) {
        poke.prev_evolution.map(pe => {
          pokemonData.forEach(pd => {
            if (pd.name === pe.name) {
              pe.img = pd.img;
            }
          });
          return pe;
        });
      }
  
      return poke;
    };

  return (
    <div id='single-pokemon-card'>
      {pokemon ? (
        <div className='row my-3'>
          <div className='col'>
            <div className='card'>
              <div className='row no-gutters'>
                <div className='col-sm-12 col-md-2'>
                  <div className='img-container text-center d-flex justify-content-center align-items-center'>
                    <img src={pokemon.img} alt={pokemon.name} />
                  </div>
                </div>
                <div className='col-sm-12 col-md-10'>
                  <div className='card-body'>
                    {/* Card Title */}
                    <h3 className='card-title'>
                      {pokemon.name}{' '}
                      <span className='text-secondary'>#{pokemon?.num}</span>
                    </h3>
                    {/* divider */}
                    <hr />
                    {/* Pokemon Details */}
                    <div className='row'>
                      <div className='col'>
                        <div className='text-secondary'>Height</div>
                        <div>{pokemon.height}</div>
                        <div className='text-secondary mt-3'>Weight</div>
                        <div>{pokemon.weight}</div>
                      </div>
                      <div className='col'>
                        <div className='text-secondary'>Type</div>
                        <div>
                          {pokemon.type.map((t, i) => {
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

                        <div className='text-secondary mt-3'>Weaknesses</div>
                        <div>
                          {pokemon.weaknesses.map((w, i) => {
                            return (
                              <span
                                className='badge badge-pill text-white mx-1'
                                style={{ backgroundColor: setTypeColor(w) }}
                                key={i}>
                                {w}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/* divider */}
                    
                    <hr />
                    
                    <div className='row'>
                        <div className='col'>
                            <div className='text-secondary'>Candy</div>
                            <div>{pokemon.candy}</div>
                            <div className='text-secondary mt-3'>Candy Count</div>
                            <div>{pokemon.candy_count}</div>
                            <div className='text-secondary mt-3'>Egg</div>
                            <div>{pokemon.egg}</div>
                        </div>
                        <div className='col'>
                            <div className='text-secondary'>Spawn Chance</div>
                            <div>{pokemon.spawn_chance}</div>
                            <div className='text-secondary mt-3'>Average Spawns</div>
                            <div>{pokemon.avg_spawns}</div>
                            <div className='text-secondary mt-3'>Spawn Time</div>
                            <div>{pokemon.spawn_time}</div>
                        </div>
                    </div>
                    
                    <hr/>
                    
                    <div className='row'>
                      {pokemon.prev_evolution?.map((pe, i) => {
                        return (
                          <div className='col' key={i}>
                            <h5 className='text-secondary'>
                              Previous Evolution
                            </h5>
                            <div>
                              <Link to={`/pokemon/${pe.name.toLowerCase()}`}>
                                {pe.name}
                              </Link>
                            </div>
                            <img src={pe.img} alt={pe.name} />
                          </div>
                        );
                      })}
                      {pokemon.next_evolution?.map((ne, i) => {
                        return (
                          <div className='col' key={i}>
                            <h5 className='text-secondary'>Next Evolution</h5>
                            <div>
                              <Link to={`/pokemon/${ne.name.toLowerCase()}`}>
                                {ne.name}
                              </Link>
                            </div>
                            <img src={ne.img} alt={ne.name} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className='text-center'>No Pokemon by that name was found!</h2>
      )}
    </div>
  );
};

export default SinglePokemonCard;

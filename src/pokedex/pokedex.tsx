import React, {useState, useEffect} from 'react'; 
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import {listPokemon, PokemonListInterface} from '../pokemon/services/listPokemon';
interface PokedexProps {

}

export const Pokedex: React.FC<PokedexProps> = () =>{
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
  const [selectedPokemonDatails, setSelectedPokemonDatails] = useState<PokemonDetail | undefined>(undefined);

  useEffect(() => {
    listPokemon().then(( response ) => setPokemons(response.results));
  }, []);
  
  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonDetails(selectedPokemon.name)
      .then((response) => setSelectedPokemonDatails(response));
  }, [selectedPokemon]);

  return (

    <div className="bloco">

      <h1 className="c-title c-title--1">Pokedex</h1>

      Pokemons: 
      {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

      <h2>Pokemon Selecionado: {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2>
      <pre>{JSON.stringify(selectedPokemonDatails, undefined, 2)}</pre>
    </div>
  );
};

export default Pokedex;
import axios from 'axios';
import React, {useState, useEffect} from 'react';


interface PokedexProps {

}
interface PokemonListInterface {
  name: string;
  url: string;
}


export const Pokedex: React.FC<PokedexProps> = () =>{
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
  const [selectedPokemonDatails, setSelectedPokemonDatails] = useState<any | undefined>(undefined);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(( response ) => setPokemons(response.data.results));
  }, []);
  
  useEffect(() => {
    if (!selectedPokemon) return;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`).then((response) => setSelectedPokemonDatails(response.data));

  }, [selectedPokemon]);

  return (

    <div className="bloco">

      <h1 className="c-title c-title--1">Pokedex</h1>

      Pokemons: 
      {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

      <h2>Pokemon Seleionado {selectedPokemon?.name || "Nenhum pokemon selecionado"}</h2>

      {JSON.stringify(selectedPokemonDatails, undefined, 2)}
    </div>
  );
};

export default Pokedex;
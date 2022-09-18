import React, {useState} from 'react';

interface PokedexProps {

}

const pokemonsArray: string[] = ['Pikachu', 'Ditto', 'Metapod', 'Magikarp']

export const Pokedex: React.FC<PokedexProps> = () =>{
  const [pokemons, setPokemons] = useState<string[]>(pokemonsArray);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(undefined);

  return (

    <div className="bloco">
      <h1 className="c-title c-title--1">Pokedex</h1>

      Pokemons: 
      {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{ pokemon }</button>)}

      <h2 className="c-title c-title--2">Pokemon selecionado: { selectedPokemon || 'Nenhum Pokemon foi encontrado...'}</h2>
    </div>
  )
}

export default Pokedex;
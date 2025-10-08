import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
    id: number;
}


export const usePokemon = ({id}: Props) => {
  
  const [pokemon, setpokemon] = useState<Pokemon | null>(null)
  const [isLoading, setisLoading] = useState(true);

  const getPokemonById  = async (id:number) => {
    setisLoading(true);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const newPokemon: Pokemon = {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.front_default,
  };
  setpokemon(newPokemon);
  setisLoading(false);
  }


  useEffect(() => {    

   getPokemonById(id);   

  }, [id])
  

  return  {
    //properties
    isLoading,
    pokemon,
    formattedId: id.toString().padStart(3, '0'),
  }
}

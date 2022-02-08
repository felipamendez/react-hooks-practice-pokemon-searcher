import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection() {
  const [allPokemon, setAllPokemon] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(pokemonObject => setAllPokemon(pokemonObject))
  }, [])

  console.log(allPokemon)

  return (
    <>
     <Card.Group itemsPerRow={6}>
         {allPokemon.map((singlePokemon) => {
         return (
            <PokemonCard singlePokemon={singlePokemon}/>)
          }) }
     </Card.Group>
     </> 
  )  

}

export default PokemonCollection;

import React, {useState, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({allPokemon, pokemonToDisplay}) {
  

  
console.log(pokemonToDisplay)
  // console.log(allPokemon)
  // console.log("potato")

  return (
    <>
     <Card.Group itemsPerRow={6}>
         {pokemonToDisplay.map((singlePokemon) => {
         return (
            <PokemonCard singlePokemon={singlePokemon}/>)
          }) }
     </Card.Group>
     </> 
  )  

}

export default PokemonCollection;

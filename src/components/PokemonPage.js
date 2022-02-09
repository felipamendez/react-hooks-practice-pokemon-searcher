import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage({handleFormSubmit}) {
  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(pokemonObject => setAllPokemon(pokemonObject))
  }, [])

  function handleFormSubmit(newPokemon) {
    console.log("submit")
     const updatedPokemonCollection = [...allPokemon, newPokemon] 
     setAllPokemon(updatedPokemonCollection)
  }

  const pokemonToDisplay = allPokemon
    .filter((singlePokemon) => {
      return (singlePokemon.name.includes(search))
    }) 



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleFormSubmit={handleFormSubmit}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection allPokemon={allPokemon} pokemonToDisplay={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;

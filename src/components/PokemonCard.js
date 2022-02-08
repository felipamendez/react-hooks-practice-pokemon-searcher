import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({singlePokemon}) {

  

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" scr={singlePokemon.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{singlePokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {singlePokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

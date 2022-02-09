import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({singlePokemon}) {
  const [isOn, setIsOn] = useState(true)


  function handleCardClick() {
   setIsOn( (isOn) => !isOn)
   
  }

  return (
    <Card>
      <div onClick={handleCardClick}>
        <div className="image">
          {isOn ? <img alt="oh no!" scr={singlePokemon.sprites.front}/> : <img alt="backSprite!" scr={singlePokemon.sprites.back}/>}
          
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

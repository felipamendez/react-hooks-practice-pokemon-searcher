import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleFormSubmit}) {
  const [newName, setNewName] = useState("")
  const [newHp, setNewHp] = useState("")
  const [newFrontImage, setNewFrontImage] = useState("")
  const [newBackImage, setNewBackImage] = useState("")

  function handleNameChange (e) {
    setNewName(e.target.value)
  }

  function handleHpChange (e) {
    setNewHp(e.target.value)
  }

  function handleFrontImageChange (e) {
    setNewFrontImage(e.target.value)
  }

  function handleBackImageChange (e) {
    setNewBackImage(e.target.value)
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form...");
          const formData= {
            name: newName,
            hp: newHp,
            sprites: {
               frontSprite: newFrontImage,
               backSprite: newBackImage,
              }
          }
          fetch("http://localhost:3001/pokemon",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          })
            .then((r) => r.json())
            .then((newPokemon) => handleFormSubmit(newPokemon))
        
        }
      }
      >
        <Form.Group widths="equal" onSubmit={handleFormSubmit}>
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={newName} onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={newHp} onChange={handleHpChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newFrontImage}
            onChange={handleFrontImageChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newBackImage}
            onChange={handleBackImageChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

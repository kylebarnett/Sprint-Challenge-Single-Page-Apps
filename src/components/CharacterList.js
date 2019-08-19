import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    setTimeout(() => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => setCharacters(res.data.results))
        .catch(err => console.log(err))
      setIsLoading(false)
    }, 1000)
  }, []);

  const changeHandler = event => {
    setInputValue(event.target.value)
  }

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {isLoading && <h1>Loading Characters...</h1>}
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}

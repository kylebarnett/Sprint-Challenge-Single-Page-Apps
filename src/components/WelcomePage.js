import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function WelcomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [picture, setPicture] = useState([])

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setPicture(res.data.results[0].image))
      setIsLoading(false)
  }, [])
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        {isLoading && <h1>Loading Info...</h1>}
        <img
          className="main-img ui centered medium circular image"
          src={picture}
          alt=""
        />
      </header>
    </section>
  );
}

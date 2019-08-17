import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocations(res.data.results))
  }, [])

  return (
    <section className="character-list grid-view">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </section>
  )
}

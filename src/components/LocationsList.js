import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => setLocations(res.data.results))
      setIsLoading(false)
  }, [])

  return (
    <section className="character-list grid-view">
    {isLoading && <h1>Loading Locations...</h1>}
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </section>
  )
}

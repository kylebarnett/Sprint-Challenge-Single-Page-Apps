import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => setEpisodes(res.data.results))
      .catch(err => console.log(err))
      setIsLoading(false)
  })
  return (
    <section className="character-list grid-view">
    {isLoading && <h1>Loading Episodes...</h1>}
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </section>
  )
}
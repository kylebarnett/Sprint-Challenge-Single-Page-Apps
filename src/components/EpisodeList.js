import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => setEpisodes(res.data.results))
      .catch(err => console.log(err))
  })
  return (
    <section className="character-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </section>
  )
}
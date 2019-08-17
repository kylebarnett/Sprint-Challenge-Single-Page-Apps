import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content header={props.episode.name} />
      <Card.Content description={`Aired: ${props.episode.air_date}`} />
      <Card.Content extra>
        <Icon name='user' />
        {props.episode.characters.length}
      </Card.Content>
    </Card>
  )
}
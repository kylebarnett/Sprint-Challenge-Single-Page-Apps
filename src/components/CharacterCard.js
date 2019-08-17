import React from "react";
import { Header, Icon, Image, Card } from 'semantic-ui-react';


export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Meta>{props.character.species}</Card.Meta>
        <Card.Description>
          {props.character.status}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes
  </a>
      </Card.Content>
    </Card>
  )
}

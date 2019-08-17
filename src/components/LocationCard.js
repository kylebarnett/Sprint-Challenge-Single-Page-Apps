import React from "react";
import { Card, Icon } from 'semantic-ui-react';

export default function LocationCard(props) {
  // const { name, type, dimenstion, residents } = location
  const { type, dimension } = props.location
  return (
    <Card>
      <Card.Content header={props.location.name} />
      <Card.Content description={`${type} : ${dimension}`} />
      <Card.Content extra>
        <Icon name='user' />
        {props.location.residents.length}
      </Card.Content>
    </Card>
  )
}

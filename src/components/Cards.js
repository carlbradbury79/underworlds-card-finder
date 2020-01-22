import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const UnderworldCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Cards = props => {
  console.log('props', props.cards);
  let cards = props.cards;
  return (
    <UnderworldCards>
      {cards.map(card => {
        return <Card key={card.number} card={card} />;
      })}
    </UnderworldCards>
  );
};

export default Cards;

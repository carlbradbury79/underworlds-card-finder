import React from 'react';
import styled from 'styled-components';

const UnderworldCard = styled.img`
  width: 300px;
`;

const Card = props => {
  console.log('card', props.card.number);
  return (
    <UnderworldCard
      src={`https://codeaday.co.uk/cards/${props.card.number}.png`}
      alt=''
    />
  );
};

export default Card;

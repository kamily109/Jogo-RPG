import React from 'react';

const PlayerCard = ({ player, onRemovePlayer }) => {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>Vida: {player.life}</p>
      <p>Mana: {player.mana}</p>
      <p>Nome da Magia: {player.magicName}</p>
      <p>Descrição da Magia: {player.magicDescription}</p>
      <button className='remover' onClick={() => onRemovePlayer(player)}>Remover</button>
    </div>
  );
};

export default PlayerCard;

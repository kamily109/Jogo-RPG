import React, { useState } from 'react';
import PlayerForm from './components/PlayerForm';
import PlayerCard from './components/PlayerCard';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const removePlayer = (playerToRemove) => {
    setPlayers(players.filter((player) => player !== playerToRemove));
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <>
    <div>
      <h1>RPG</h1>
      <PlayerForm onAddPlayer={addPlayer} />
      <br></br><br></br>
      <div id = "teste">
        <label>
          Pesquisa:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <hr />
      <h2>Jogadores</h2>
      {filteredPlayers.map((player, index) => (
        <PlayerCard key={index} player={player} onRemovePlayer={removePlayer} />
      ))}
    </div>
    </>
  );
};

export default App;

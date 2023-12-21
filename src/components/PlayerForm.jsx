import React, { useState } from 'react';

const PlayerForm = ({ onAddPlayer }) => {
  const [name, setName] = useState('');
  const [life, setLife] = useState(100);
  const [mana, setMana] = useState(50);
  const [magicName, setMagicName] = useState(''); // Adicionado campo para o nome da magia
  const [magicDescription, setMagicDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlayer({ name, life, mana, magicName, magicDescription });
    // Limpar os campos após o envio do formulário
    setName('');
    setLife(100);
    setMana(50);
    setMagicName('');
    setMagicDescription('');
  };

  return (
    <section className='inicio'>
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Vida:
        <input type="number" value={life} onChange={(e) => setLife(e.target.value)} />
      </label>
      <label>
        Mana:
        <input type="number" value={mana} onChange={(e) => setMana(e.target.value)} />
      </label>
      <label>
        Magia:
        <input type="text" value={magicName} onChange={(e) => setMagicName(e.target.value)} />
      </label>
      <label>
        Descrição da Magia:
        <input className='descrtion' type="text" value={magicDescription} onChange={(e) => setMagicDescription(e.target.value)} />
      </label>
      <button type="submit">Adicionar Jogador</button>
    </form>
    </section>
  );
};

export default PlayerForm;

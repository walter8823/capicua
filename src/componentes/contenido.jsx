import React, { useState } from 'react';
import Input from './input';

const Contenido = () => {
  const [input, setInput] = useState('');
  const [isCapicua, setIsCapicua] = useState(null);

  const verificarCapicua = (texto) => {
    return texto === texto.split('').reverse().join('');
  };

    const envio = (e) => {
    e.preventDefault();
    setIsCapicua(verificarCapicua(input));
  };

  return (
    <div>
      <Input input={input} setInput={setInput} envio={envio} />
      {isCapicua !== null && (
        <h2>
          La secuencia es {isCapicua ? 'capicúa' : 'no capicúa'}.
        </h2>
      )}
    </div>
  );
};

export default Contenido;
import React from 'react';

const Input = ({ input, setInput, envio }) => {
  return (
    <form onSubmit={envio}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="por favor ingresa aqui la cadena que deseas revisar"
      />
      <br />
      <button type="submit">Revisar cadena</button>
    </form>
  );
};

export default Input;
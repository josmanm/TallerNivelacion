// MiContadorConUseReducer.js
import  { useReducer } from 'react';
import contadorReducer from '../reducers/contadorReducer';

const MiContadorConUseReducer = () => {
  const [state, dispatch] = useReducer(contadorReducer, { contador: 0 });

  const incrementar = () => {
    dispatch({ type: 'INCREMENTAR' });
  };

  const disminuir = () => {
    dispatch({ type: 'DISMINUIR' });
  };

  return (
    <div>
      <h1>Contador con useReducer</h1>
      <p>Valor actual: {state.contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default MiContadorConUseReducer;


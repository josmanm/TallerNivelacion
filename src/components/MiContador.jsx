import { useState } from "react";

const MiContador = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  )
}

export default MiContador
import { useState } from 'react';

function ContadorNegativo() {
  const [conta, setConta] = useState(0);

  return (
    <div>
      <h1>Contador: {conta}</h1>
      <h2>{conta}</h2>
      <button onClick={() => setConta(conta - 1)}>Incrementar</button>
    </div>
  );
}

export default ContadorNegativo;

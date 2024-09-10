
import { useStates } from "React" ;
  function MeuComponente () {
    const [Conta, setConta] = useState (0);
    return (
      <div>
          <h1>{ Conta }</h1>
          </div>
    );
  }
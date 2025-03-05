import React from 'react'
import UseContador from '../componentesHooksPersonalizados/UseContador'

function Contador(){
    const {count,incrementar, decrementar, reset}=UseContador(0);





  return (
    <div>
        <h1>Contador</h1>
        <div>{count}</div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Contador
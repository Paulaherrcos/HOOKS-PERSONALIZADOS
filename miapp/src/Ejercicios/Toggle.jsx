import React from 'react'
import UseToggle from '../componentesHooksPersonalizados/UseToggle'

function Toggle(){
    const {valor, cambiarBoolean, mensaje}=UseToggle(false);


  return (
    <div>
        <h1>Toggle</h1>
        <button onClick={cambiarBoolean}>Cambiar toggle</button>
        <p>{mensaje}</p>
    </div>
  );
}

export default Toggle
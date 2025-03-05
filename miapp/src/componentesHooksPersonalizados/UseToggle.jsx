import React, { useState } from 'react'

function UseToggle(){
  const [valor, setValor]=useState(false);
  const [mensaje, setMensaje]=useState('Hola');

  const cambiarBoolean = (e) =>{
    setValor(valor ? false : true);
    setMensaje(valor ? 'hola' : 'adios');
  }


  return {valor, cambiarBoolean, mensaje};
}

export default UseToggle
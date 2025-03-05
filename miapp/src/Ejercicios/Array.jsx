import React from 'react'
import UseArray from '../componentesHooksPersonalizados/UseArray';

function Array(){
    const {array,inputValor,mensaje,setinputValor, removeItem, updateItem, addItem}=UseArray([]);

  return (
    <>
    <h1>Array</h1>
    {array}
    <input type="text" value={inputValor} onChange={(e) => setinputValor(e.target.value)} />
    <button onClick={addItem}>Agregar funcion</button>
    {mensaje}
    <h3>Lista funciones agregadas</h3>
    {array.map((arr, index)=>(
        <li>{arr}</li>
    ))}
    </>
  );
};

export default Array
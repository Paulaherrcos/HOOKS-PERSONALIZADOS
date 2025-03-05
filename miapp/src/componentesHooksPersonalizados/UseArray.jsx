import React, { useState } from 'react'

function UseArray(){
    const [array, setArray]=useState([]);
    const [inputValor, setinputValor]=useState("");
    const [mensaje,setMensaje]=useState("");

    const addItem=()=>{
      if(inputValor.trim()!==""){
        setArray([...array,inputValor]);
        setinputValor("");
      }else{
          setMensaje("Debes introducir una función");
      }
    }

    const removeItem=()=>{
      setArray([""]);
    }

    const updateItem=()=>{
      
    }

  return {array,inputValor,mensaje, setinputValor, removeItem, updateItem, addItem};
}

export default UseArray
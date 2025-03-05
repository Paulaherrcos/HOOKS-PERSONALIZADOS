import React, { useState } from 'react'

function UseContador(initialValue){
  const [count,setCount]=useState(null);

const incrementar=(e)=>{
  setCount(count+1);
}

const decrementar=(e)=>{
  setCount(count-1);
}

const reset=(e)=>{
  setCount(0);
}

  return {count, incrementar, decrementar, reset}
}

export default UseContador
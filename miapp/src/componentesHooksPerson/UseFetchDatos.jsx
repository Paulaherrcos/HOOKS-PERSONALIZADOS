import React, { useEffect, useState } from 'react'
// el parámetro validate no es necesario en este caso ya que recibo los datos de la api, en el caso de un formulario si es necesario yaque debo verificar los datos del input
function HooksPersonFetchDatos(url=null){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
 
    useEffect(()=>{
      if (!url) return;
      fetch(url)
      .then ((response)=>response.json())
      .then((data)=>{
        setData(data);
        setLoading(false);
      })
      .catch((error)=>{
        setError(error);
        setLoading(false);
      });
    },[url]);
 
  return{data, loading, error};
}

export default HooksPersonFetchDatos
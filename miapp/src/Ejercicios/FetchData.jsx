import React, { useState } from 'react'
import UseFetchDatos from '../componentesHooksPerson/UseFetchDatos'

function FetchData(){
    
    const [url,setUrl]=useState('https://biblioteca.guappi.com/api/libros'); //debo poner antes la url para podersela pasar al hookpersonalizado
    const {data, loading, error}=UseFetchDatos(url);

 
  return (
   <div>
        <h1>Datos URL</h1>
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {/* si quiero poner un button para cambiar de url */}
        <button onClick={() => setUrl('https://dog.ceo/api/breeds/list/all')}>
            Cargar otros datos
        </button>
   </div>
  );
}

export default FetchData
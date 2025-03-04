import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Ejercicios/Formulario'
import FetchData from './Ejercicios/FetchData'
import Contador from './Ejercicios/Contador'
import Toggle from './Ejercicios/Toggle'
import LigthDark from './Ejercicios/LigthDark'
import Array from './Ejercicios/Array'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Array/>
    <LigthDark/>
      <Toggle/>
      <Contador/>
      <FetchData/>
      <Formulario/>
    </>
  );
}

export default App

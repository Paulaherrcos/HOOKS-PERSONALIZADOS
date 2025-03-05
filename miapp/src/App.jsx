import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Ejercicios/Formulario'
import FetchData from './Ejercicios/FetchData'
import Contador from './Ejercicios/Contador'
import Toggle from './Ejercicios/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle/>
      <Contador/>
      <FetchData/>
      <Formulario/>
    </>
  );
}

export default App

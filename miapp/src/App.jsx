import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Ejercicios/Formulario'
import FetchData from './Ejercicios/FetchData'
import Contador from './Ejercicios/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
      <FetchData/>
      <Formulario/>
    </>
  );
}

export default App

import React, { useEffect } from 'react'
import UseLigthDark from '../componentesHooksPersonalizados/UseLigthDark'

function LigthDark(){
    const {isOpen, openModal, closeModal}=UseLigthDark();

    useEffect(()=>{
        document.body.style.backgroundColor = isOpen ? 'white':'black';
        document.body.style.color = isOpen ? 'black':'white';
    }, [isOpen]);


  return (
    <div>
        <h1>LigthDark</h1>
        <button onClick={openModal}>Ligth</button>
        <button onClick={closeModal}>Dark</button>
    </div>
  )
}

export default LigthDark
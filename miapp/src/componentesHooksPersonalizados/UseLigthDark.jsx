import React, { useState } from 'react'

function UseLigthDark(){
  const [ isOpen, setOpen]=useState(false);

  const openModal=()=>{
    setOpen(true);
  }

  const closeModal=()=>{
    setOpen(false);
  }

  return{isOpen, openModal, closeModal};
}

export default UseLigthDark
import React, { useState } from 'react'

const HooksPersFormulario = (initialValue) => {
    const [values, setValue]=useState(initialValue);
    const [error,setError]=useState({});


    const handleChange = (e)=>{
        const{name, value}=e.target;
        setValue({...values, [name]:value});
    };

    const resetForm = (e)=>{
        setformulario("");
    };

    const handleSubmit = (e)=>{
        e.preventdefault();
        const validarErrores=validate(values);
        setError(validarErrores);
    if(Object.keys(validarErrores).length===0){
        console.log('Formulario enviado', values);
    }
    };



  return {values, error, handleChange, handleSubmit, resetForm};
}

export default HooksPersFormulario
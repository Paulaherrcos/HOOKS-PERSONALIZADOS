import React, { useState } from 'react'

function HooksPersFormulario(initialValue, validate){
    const [values, setValue]=useState(initialValue);
    const [error,setError]=useState({});
    const [envio, setEnvio]=useState(null);


    const handleChange = (e)=>{
        const{name, value}=e.target;
        setValue({...values, [name]:value});
    };

    const resetForm = (e)=>{
        //como values es un objeto {...} debo resetearlo a initialValue
        setValue(initialValue);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const validarErrores=validate(values);
        setError(validarErrores);
    if(Object.keys(validarErrores).length===0){
        console.log('Formulario enviado', values);
        setEnvio("Formulario enviado");
        resetForm();
    }
    };



  return {values, error, envio, handleChange, handleSubmit, resetForm};
}

export default HooksPersFormulario
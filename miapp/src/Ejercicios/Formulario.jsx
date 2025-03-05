import React from 'react'
import UseFormulario from '../componentesHooksPersonalizados/UseFormulario'

const Formulario = () => {
    const{values, error,envio, handleChange, handleSubmit, resetForm}=UseFormulario(
        {nombre:''},
        (values)=>{
            const errors={};
            if(!values.nombre) errors.nombre='El nombre es obligatorio';
            return errors;
        }
    )


  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        name='nombre' value={values.nombre}
        onChange={handleChange} placeholder='Nombre' />
        {/* ternaria si sale el error, si no ponme el mensaje de envío */}
        {error.nombre ? (<p>{error.nombre}</p>) : (<p>{envio}</p>)}
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Formulario
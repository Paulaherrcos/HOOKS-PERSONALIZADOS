import React from 'react'

const Formulario = () => {
    const{values, errors, handleChange, handleSubmit, resetForm}=HooksPersFormulario(
        {nombre:''},
        (values)=>{
            const error={};
            if(!values.nombre) error.nombre='El nombre es obligatorio';
            return error;
        }
    )


  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        name='nombre' value={values.nombre}
        onChange={handleChange} placeholder='Nombre' />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Formulario
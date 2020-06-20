import React, { Fragment, useState } from 'react';


const Formulario = () => {

    // Crear State de citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''
    })

    // Funcion que se ejecuta cada vez que un usuario ejecuta un input
    const actualizarState = e => {
        // Se usa el segundo parametro pasado en el state, la funcion
        actualizarCita({
            // se crea una copia del state cita
            ...cita,
            [e.target.name]:e.target.value
        })
        
    }

    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita

    // Evento submti
    const submitCita = () => {
        alert('Ennviando formulario')
    }

    return (
      <Fragment>
        <h2>Crear Cita</h2>

        <form
            onSubmit={submitCita}>
            <label htmlFor="">Nombre Mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value = {mascota}
            />
            <label htmlFor="">Nombre Dueño</label>
            <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño"
                onChange={actualizarState}
                value = {propietario}
            />
            <label htmlFor="">Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value = {fecha}
            />
            <label htmlFor="">Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value = {hora}
            />
            <label htmlFor="">Síntomas</label>
            <textarea 
                name="sintomas"
                className="u-full-width"
                onChange={actualizarState}
                value = {sintomas}
            ></textarea>
            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>
        </form>
      </Fragment>
    );
}
 
export default Formulario;
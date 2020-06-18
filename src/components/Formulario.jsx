import React, { Fragment } from 'react';


const Formulario = () => {
    return (
      <Fragment>
        <h2>Crear Cita</h2>

        <form>
            <label htmlFor="">Nombre Mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
            />
            <label htmlFor="">Nombre Dueño</label>
            <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño"
            />
            <label htmlFor="">Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
            />
            <label htmlFor="">Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
            />
            <label htmlFor="">Síntomas</label>
            <textarea 
                name="sintomas"
                className="u-full-width"
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
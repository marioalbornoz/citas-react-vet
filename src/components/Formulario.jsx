import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";


const Formulario = ( {crearCita} ) => {
  // Crear State de citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // state que actualiza si hay un error en el formulario
  const [error, actualizarError] = useState(false);

  // Funcion que se ejecuta cada vez que un usuario ejecuta un input
  const actualizarState = (e) => {
    // Se usa el segundo parametro pasado en el state, la funcion
    actualizarCita({
      // se crea una copia del state cita y luego se guarda el valor dependiendo del nombre del input
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Destructuring del state; Extraer los valores para agregar value a input y foormatear el form mas adelante
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Evento submti
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim()=== "" ||
      fecha.trim()==="" ||
      hora.trim()==="" ||
      sintomas.trim()===""
    ) {
      actualizarError(true);
      return;      
    }
    else {
      actualizarError(false);
    }

    // Asignar ID
    cita.id = uuid();
    
    // Crear la cita en el state principal
    crearCita(cita);
    // Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    })
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label htmlFor="">Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={actualizarState}
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label htmlFor="">Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};
 
export default Formulario;
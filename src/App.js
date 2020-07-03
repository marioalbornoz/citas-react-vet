import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {


  // Citas en localStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  // state: arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales); 

  // UseEfect para realziar cierta operaciones cuando el state cambia
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  // Funcion que toma las cita actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //  Funcion que elimina una cita por su id
  const eliminarCitas = id => {
    console.log("Eliminando cita...");
    const nuevoArrayCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevoArrayCitas)
  }

  //  Mensaje condicional
const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row" >
          <div className="one-half column">
              <Formulario 
                crearCita = {crearCita}
              />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map(cita =>(
                <Cita
                  key={cita.id}
                  cita = {cita}
                  eliminarCitas = {eliminarCitas}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

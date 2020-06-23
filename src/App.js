import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  // state arreglo de citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }
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
              2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

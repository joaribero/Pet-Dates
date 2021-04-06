import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario.jsx';
import Cita from './components/Cita.jsx';



function App() {

  //Array de citas
  const [citas, guardarCitas] = useState([]);

  //UseEffect
  useEffect(() => {
    console.log('listo');
  })

  //Función que toma las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  //Función para eliminar una cita
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);

    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map(cita => (
                <Cita
                  key= {cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;

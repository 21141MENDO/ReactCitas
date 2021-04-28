import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  

  //citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //arreglo citas, inicia como un arreglo vacio por que son varias citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use Effect para realizar ciertas operaciones cuando el State cambia, seria como un documet ready en JQuery
  //se le pasa un arreglo vacio para que solo se ejecute una ves
  useEffect(()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    } else {
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas]);



  // funcion que toma  las citas actules y agregre la nueva, realizamos un array con copia del State citas y se le pasa la nueva cita 
  const crearCita = cita => {
    guardarCitas ([
        ...citas,
        cita
    ]);

  }

  // funcion que elimina una cita por si id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas (nuevasCitas);
}

 //mensaje condicional
 const titulo = citas.length === 0 ?'No hay citas':'Administra tus citas';
 console.log(citas.length);

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita =>(
                <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita} 
                />
              ))}
          </div>
        </div>
      </div>
      
    </Fragment>
   
  );
}

export default App;

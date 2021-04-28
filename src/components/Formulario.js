import React, { Fragment, useState } from "react";
import uuid from 'shortid/index';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

  //crear State de citas se utilizan llaves por que es un objeto
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  //crear State de errores se utilizan parentesis por que es un boolean 
  const [error, actualizarError] = useState(false)

  // Funcion que se ejecuta cada que el usuario escribe un input
  const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name] : e.target.value
    })
  };


  //extraer los valores

  const {mascota,propietario,fecha,hora,sintomas} = cita;

  // cuando el usuario presiona agregar cita, por metodo GET y envia todos los datos
  // nota: se puede pasar como una e cuando la funcion solo tenga un parametro
  const submitCita = e =>{
      e.preventDefault();

     
    
      //validar, trim se utiliza para validar lugares vacios
      if(mascota.trim() === ''|| propietario.trim() === ''|| fecha.trim() === ''|| hora.trim() === ''|| sintomas.trim() === ''){
        actualizarError(true);
          return;
      }
      
      //Eliminar mensaje previo
    //   actualizarError(false);

      //asignar un ID, se puden descargar librerias para generar id, npm i uuid y despues importamos import uuid from 'uuid/dist/v4';
      cita.id = uuid();

      //crear cita
      crearCita(cita);

      //reiniciar form
      actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
      });
  }


  return (
    <Fragment>
      <h2>Crear cita</h2>
        {error
        ?
        <p className="alerta-error">Todos los  campos son obligatorios</p>
        :
        null
        }
      <form
        onSubmit={submitCita}
        
      >
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={fecha}/>
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={hora}/>
        <label>Sìntomas</label>
        <textarea className="u-full-width" name="sintomas" onChange={actualizarState} value={sintomas}></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

// los prop type son una forma de documentar tus componentes
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;

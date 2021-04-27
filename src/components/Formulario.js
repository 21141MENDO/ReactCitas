import React, { Fragment, useState } from "react";

const Formulario = () => {

  //crear State de citas se utilizan llaves por que es un objeto
  const [cita, utilizarCita] = useState({
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
    utilizarCita({
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

      //asignar un ID

      //crear cita

      //reiniciar form
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
        <input type="date" name="fecha" className="u-full-width" onChange={actualizarState}/>
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange={actualizarState}/>
        <label>Sìntomas</label>
        <textarea className="u-full-width" name="sintomas" onChange={actualizarState}></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

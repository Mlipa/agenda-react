import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="display-4">Acerca de</h1>
        <print className="h3">Desarrollo</print>
        <p className="h5">
        La agenda electrónica es un administrador de información personal que esta enfocada al almacenamiento de datos para su gestión utilizando el concepto básico PIM (Personal Information Manager, Administrador de información personal).
          Personal Information Manager: Un administrador de información personal es un tipo de software de aplicación que funciona como un organizador personal. El acrónimo PIM se utiliza ahora, más comúnmente, en referencia a la gestión de información personal como campo de estudio.  Como herramienta de gestión de información, el propósito de una herramienta PIM es facilitar el registro, seguimiento y gestión de ciertos tipos de "información personal".
        </p>
        <p className="h3">Concepto</p>
        <p className="h5">
        Una de las principales funciones de las agendas electrónicas es de servir como un administrador de información personal ya que funciona bajo el concepto de: organizar, facilitar el registro, seguimiento y la gestión de datos.
        Los docentes, en ciertas ocasiones requieren los datos de los estudiantes por algún motivo, pero tampoco tiene su contacto a la mano y eso genera disconformidad en la comunicación.
        </p>
        <p className="h5">
          
        </p>
      </div>
    </div>
  );
};

export default About;

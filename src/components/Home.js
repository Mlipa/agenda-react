import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Modelo from "../assets/Principal.svg";
import startup from "../assets/Startup.svg";

const Home = () => {
  const [con, setcon] = useState(false);
  const controllerModal = (variable) => setcon(variable);

  return (
    <div>
      <Navbar />
      <div className="container container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="display-1">Bienvenido</h1>
            <p className="display-6">a tu agenda web</p>
            <h5 className="mt-5">Eres estudiante registra tus datos.</h5>
            <button
              type="button"
              className="btn btn-warning rounded-pill my-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() => controllerModal(true)}
            >
              Registra tus datos
            </button>
            {con && <Modal />}
          </div>
          <div className="col">
            <img src={Modelo} alt="logo" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="container col-md-6 py-1">
            <img src={startup} alt="startup" />
          </div>
          <div className="container col-md-6 list-group p-1">
            <div className="list-group-item list-group-item-action flex-column align-items-start active">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Misión</h5>
                <small>4 de Diciembre</small>
              </div>
              <p className="mb-1">
              Ser la Universidad líder en la formación de profesionales en Ingeniería y de especialización, caracterizada por el estudio, aplicación e innovación tecnológica, con responsabilidad social y reconocida a nivel nacional e internacional.
              </p>
              <small>"Escule Militar de Ingeniria"</small>
            </div>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Visión</h5>
                <small className="text-muted">4 de Diciembre</small>
              </div>
              <p className="mb-1">
              Formar y especializar profesionales de excelencia, con principios, valores ético - morales y cívicos, caracterizados por su responsabilidad social, espíritu emprendedor, liderazgo y disciplina; promoviendo la internacionalización, Interacción Social y desarrollo de la Ciencia, Tecnología e Innovación, para contribuir al desarrollo del Estado.
              </p>
              <small className="text-muted">"Escule Militar de Ingeniria"</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";

const Modal = () => {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [ci, setci] = useState("")
  const [tutor, settutor] = useState("")
  const [phone, setphone] = useState("")
  const [emergency, setemergency] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:5000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        ci,
        tutor,
        phone,
        emergency
      }),
    });
    await res.json();
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Registro Estudiantes
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label mt-4">
                Nombres
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="nombre"
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
              <small id="nameHelp" className="form-text text-muted">
                introduce tus nombres.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="lastNameInput" className="form-label mt-4">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="lastNameInput"
                aria-describedby="lastHelp"
                placeholder="apellido"
                onChange={(e) => setlastName(e.target.value)}
                value={lastName}
              />
              <small id="lastHelp" className="form-text text-muted">
                introduce tus apellidos.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Correo de contacto
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="correo"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
              <small id="emailHelp" className="form-text text-muted">
                Introduce un correo de contacto.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label mt-4">
                Carnet Identidad
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="carnet de identidad"
                onChange={(e) => setci(e.target.value)}
                value={ci}
              />
              <small id="nameHelp" className="form-text text-muted">
                introduce tu carnet de identidad.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label mt-4">
                Nombre del padre, madre o tutor
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="tutor"
                onChange={(e) => settutor(e.target.value)}
                value={tutor}
              />
              <small id="nameHelp" className="form-text text-muted">
                introduce el nombre de tu tutor.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label mt-4">
                Celular
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="celular"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
              />
              <small id="nameHelp" className="form-text text-muted">
                introduce tu número de telefono.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="nameInput" className="form-label mt-4">
                Celular de emergencia
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="número de emergecia"
                onChange={(e) => setemergency(e.target.value)}
                value={emergency}
              />
              <small id="nameHelp" className="form-text text-muted">
                introduce un número de emergencia
              </small>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

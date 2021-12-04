import React, { useState, useEffect } from "react";

const UserLogin = () => {
  const [id, setid] = useState("");

  const [updateActivate, setupdateActivate] = useState(false);
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [ci, setci] = useState("");
  const [tutor, settutor] = useState("");
  const [phone, setphone] = useState("");
  const [emergency, setemergency] = useState("");

  const [userName, setuserName] = useState("");
  const [emailAdmin, setemailAdmin] = useState("");
  const [password, setpassword] = useState("");
  const [updateActivateAdmin, setupdateActivateAdmin] = useState(false)

  const clearInputs = () => {
    setname("");
    setlastName("");
    setemail("");
    setci("");
    settutor("");
    setphone("");
    setemergency("");
    setuserName("");
    setemailAdmin("");
    setpassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!updateActivate) {
      const res = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
          ci,
          tutor,
          phone,
          emergency,
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`http://127.0.0.1:5000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
          ci,
          tutor,
          phone,
          emergency,
        }),
      });
      await res.json();
      setupdateActivate(false);
      setid("");
    }
    getUsers();
    clearInputs();
  };

  const [users, setusers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("http://127.0.0.1:5000/users");
    const data = await res.json();
    setusers(data);
  };
  useEffect(() => {
    getUsers();
    viewAdmins();
  }, []);

  const updateUser = async (id) => {
    const res = await fetch(`http://127.0.0.1:5000/users/${id}`);
    const data = await res.json();
    setupdateActivate(true);
    setid(id);
    setname(data.name);
    setlastName(data.lastName);
    setemail(data.email);
    setci(data.ci);
    settutor(data.tutor);
    setphone(data.phone);
    setemergency(data.emergency);
  };

  const deleteUser = async (id) => {
    const confirmation = await window.confirm("Esta seguro de eliminar.");
    if (confirmation) {
      const res = await fetch(`http://127.0.0.1:5000/users/${id}`, {
        method: "DELETE",
      });
      await res.json();
      await getUsers();
    }
  };

  const handleSubmitAdmin = async (e) => {
    e.preventDefault();
    if(!updateActivateAdmin){
      const res = await fetch(`http://127.0.0.1:5000/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: emailAdmin,
          password: password,
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`http://127.0.0.1:5000/admin/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: emailAdmin,
          password: password,
        }),
      });
      await res.json();
      setupdateActivateAdmin(false);
      setid("");
    }
    viewAdmins();
    clearInputs();
  };

  const [dataAdmins, setdataAdmins] = useState([]);
  const viewAdmins = async () => {
    const res = await fetch(`http://127.0.0.1:5000/admin`);
    const data = await res.json();
    setdataAdmins(data);
  };
  useEffect(() => {
    viewAdmins();
  }, []);

  const updateAdmin = async (id) => {
    const res = await fetch(`http://127.0.0.1:5000/admin/${id}`);
    const data = await res.json();
    setupdateActivateAdmin(true);
    setid(id);
    setuserName(data.name);
    setemailAdmin(data.email);
    setpassword(data.password);
  }

  const deleteAdmin = async (id) => {
    const confirmation = await window.confirm("Esta seguro de eliminar el administrador.");
    if (confirmation) {
      const res = await fetch(`http://127.0.0.1:5000/admin/${id}`, {
        method: "DELETE",
      });
      await res.json();
      await getUsers();
    }
    viewAdmins()
  }

  return (
    <div>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#users">
              Panel de Usuarios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#admins">
              Panel de Administradores
            </a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade" id="users">
            <div className="row justify-content-center ">
              <form
                className="col-6 border card border-secondary mb-3 m-2"
                onSubmit={handleSubmit}
              >
                <div className="p-3">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Registro Estudiantes
                  </h5>
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
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label mt-4"
                    >
                      correo de contacto
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
                      Introduce el correo de contacto.
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
                      placeholder="nombre tutor"
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
                      placeholder="telefono o celular"
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
                      placeholder="numero de emergencia"
                      onChange={(e) => setemergency(e.target.value)}
                      value={emergency}
                    />
                    <small id="nameHelp" className="form-text text-muted">
                      introduce un telefono de emergencia.
                    </small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    {updateActivate ? "Actualizar" : "Registrar"}
                  </button>
                </div>
              </form>
              <div className="col-md-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>nombres</th>
                      <th>apellidos</th>
                      <th>correo</th>
                      <th>carnet</th>
                      <th>tutor</th>
                      <th>celular</th>
                      <th># emergencia</th>
                      <th>opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.ci}</td>
                        <td>{user.tutor}</td>
                        <td>{user.phone}</td>
                        <td>{user.emergency}</td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm btn-block"
                            onClick={() => updateUser(user._id)}
                          >
                            editar
                          </button>
                          <button
                            className="btn btn-danger btn-sm btn-block"
                            onClick={() => deleteUser(user._id)}
                          >
                            borrar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade active show" id="admins">
            <div className="row justify-content-center ">
              <form
                className="col-4 border card border-secondary mb-3 m-2"
                onSubmit={handleSubmitAdmin}
              >
                <div className="p-3">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Registro Estudiantes
                  </h5>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="nameInput" className="form-label mt-4">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      aria-describedby="nameHelp"
                      placeholder="usuario"
                      onChange={(e) => setuserName(e.target.value)}
                      value={userName}
                    />
                    <small id="nameHelp" className="form-text text-muted">
                      introduzca el nombre de usuario.
                    </small>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label mt-4"
                    >
                      correo
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="correo"
                      onChange={(e) => setemailAdmin(e.target.value)}
                      value={emailAdmin}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Introduzca un correo.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameInput" className="form-label mt-4">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="nameInput"
                      aria-describedby="nameHelp"
                      placeholder="contraseña"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                    />
                    <small id="nameHelp" className="form-text text-muted">
                      Introduzca la contraseña.
                    </small>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    {updateActivateAdmin ? "Actualizar" : "Registrar"}
                  </button>
                </div>
              </form>
              <div className="col-md-5">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Usuario</th>
                      <th>Correo</th>
                      <th>Operaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataAdmins.map((admin) => (
                      <tr>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm btn-block"
                            onClick={() => updateAdmin(admin._id)}
                          >
                            editar
                          </button>
                          <button
                            className="btn btn-danger btn-sm btn-block"
                            onClick={() => deleteAdmin(admin._id)}
                          >
                            borrar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

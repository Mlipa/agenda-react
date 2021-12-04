import React, { useState } from "react";
import Navbar from "./Navbar";
import UserLogin from "./UserLogin";

const Users = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setdata] = useState({});
  const [convert, setconvert] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const logget = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setdata(await logget.json());
    convertData(data);
  };
  const convertData = (d) => {
    setconvert(d.access);
    //   for (let data in d) {
    //     setconvert(d[data]);
    //     console.log(convert)
    //   }
  };

  return (
    <>
      <Navbar />
      <div className="row justify-content-center">
        {convert ? (
          <UserLogin />
        ) : (
          <form
            className="container col-6 card border-secundary mb-3 p-3 m-3"
            onSubmit={handleLogin}
          >
            <fieldset>
              <legend>Login</legend>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Introduce tu correo"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                {/* <small id="emailHelp" className="form-text text-muted">Entremos a revisar.</small> */}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Introduce tu contraseña"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <button type="submit" className="btn btn-primary my-3">
                Login
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </>
  );
};

export default Users;

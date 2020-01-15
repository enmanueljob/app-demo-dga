import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={fields => {
          localStorage.setItem("username", fields.username);
          localStorage.setItem("password", fields.password);
          history.push("/layout");
        }}
        validate={fields => {
          const errors = {};
          if (!fields.username) {
            errors.username = "Campo requerido";
          }

          if (!fields.password) {
            errors.password = "Campo requerido";
          }

          return errors;
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Usuario</label>
              <input
                id="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
              <label htmlFor="password">Contreseña</label>
              <input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <input type="submit" value="Iniciar sesión" />
          </form>
        )}
      </Formik>
    </div>
  );
};

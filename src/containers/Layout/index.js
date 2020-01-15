// @vendors
import React from "react";
import { Link, Switch, Route } from "react-router-dom";
// @components
import { Page } from "../../components";
import "./styles.css";

export default () => {
  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/layout">Home</Link>
          </li>
          <li>
            <Link to="/layout/page-a">Page A</Link>
          </li>
          <li>
            <Link to="/layout/page-b">Page B</Link>
          </li>
          <li>
            <Link to="/login">Iniciar sesiÃ³n</Link>
          </li>
        </ul>
      </nav>
      <div className="layout-content">
        <Switch>
          <Route
            exact
            path="/layout"
            component={() => <Page color="red">Home</Page>}
          />
          <Route
            path="/layout/page-a"
            component={() => <Page color="green">Page A</Page>}
          />
          <Route
            path="/layout/page-b"
            component={() => (
              <Page color="yellow">
                <Link to="/dashboard">Dashboard</Link>
              </Page>
            )}
          />
        </Switch>
      </div>
      <div className="layout-footer">
        <div>Todos los derechos reservados 2020</div>
      </div>
    </div>
  );
};

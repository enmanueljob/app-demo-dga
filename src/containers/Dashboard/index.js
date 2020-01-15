import React from "react";
import { Link, Switch, Route } from "react-router-dom";

export default () => {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/page-c">Page C</Link>
          </li>
          <li>
            <Link to="/dashboard/page-d">Page D</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Switch>
          <Route exact path="/dashboard" component={() => <p>Dashboard</p>} />
          <Route path="/dashboard/page-c" component={() => <p>Page C</p>} />
          <Route
            path="/dashboard/page-d"
            component={() => <Link to="/layout">Layout</Link>}
          />
        </Switch>
      </div>
    </div>
  );
};

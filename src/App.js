import React from "react";
import AdminPage from "./pages/admin/AdminPage";
import { Switch, Route, Link } from "react-router-dom";
import PorterPage from "./pages/porter/PorterPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <>
            <h1>welcome</h1>
            <Link to="/admin">view admin page</Link>
          </>
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/porter">
          <PorterPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;

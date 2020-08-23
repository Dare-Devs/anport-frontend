import React, { useState } from "react";
import Porters from "./Porters";
import { Switch, Route } from "react-router-dom";
import StudentAffairs from "./StudentAffairs";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import Home from "./Home";

const AdminPage = () => {
  const [page, setPage] = useState(null);
  const routes = [
    { name: "Home", value: null },
    { name: "Porters", value: "porters" },
    { name: "Student Affairs", value: "student-affairs" },
  ];
  return (
    <div className="admin-page">
      <AppBar routes={routes} setPage={setPage} />
      <Switch>
        <Route exact path="/admin">
          {page === "porters" ? (
            <Porters />
          ) : page === "student-affairs" ? (
            <StudentAffairs />
          ) : (
            <Home />
          )}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default AdminPage;

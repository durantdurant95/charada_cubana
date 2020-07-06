import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Buscador from "./components/Buscador";
import Charada from "./components/Charada";
import Footer from "./components/Footer";
import "./App.scss";
import BarraNav from "./components/BarraNav";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <BarraNav />
            <Inicio />
            <Footer />
          </Route>
          <Route path="/buscador" exact>
            <BarraNav />
            <Buscador />
          </Route>
          <Route path="/charada" exact>
            <BarraNav />
            <Charada />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

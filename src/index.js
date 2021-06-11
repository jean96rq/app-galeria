import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import icon from '../src/images/icon.png';
import DetalleImagen from './components/DetalleImagen';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav id="inicio" className="navbar navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand bold" href="#">
              <img src={icon} alt="" height="60" />
            </Link>
          </div>
      </nav>
        <Switch>
          <Route path="/detalle/:id">
            <DetalleImagen />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

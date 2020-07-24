import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblesPage from './components/BubblePage'
import PrivateRoute from './utils/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path="/" component={Login} />

        <PrivateRoute path='/bubbles' >
          <BubblesPage />
        </PrivateRoute>

      </div>
    </Router>
  );
}

export default App;

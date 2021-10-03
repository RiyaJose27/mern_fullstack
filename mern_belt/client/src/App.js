import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import SinglePirate from './views/SinglePirate';
import Edit from './views/Edit';
import Create from './views/Create';
import AllPirates from './views/AllPirates';

function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/pirates/new" className="btn btn-lg btn-primary">Add pirate</Link> &nbsp;
      <Link to="/">All Pirates</Link>
      <Switch>
        <Route exact path="/">
          <AllPirates />
        </Route>

        <Route exact path="/pirates/new">
          <Create />
        </Route>

        <Route exact path="/pirates/:_id">
          <SinglePirate />
        </Route>

        <Route exact path="/pirates/:_id/edit">
          <Edit />
        </Route>
      </Switch>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;

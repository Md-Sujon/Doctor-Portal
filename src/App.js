import './App.css';
import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appointments from './component/Appointments/Appointments/Appointments';
import Login from './component/Login/Login/Login';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';

export const UserContext =createContext()



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router >
      <Switch>

        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/Appointments">
           <Appointments></Appointments>
        </Route>

        <Route path="/dashboard/Appointments">
           <Dashboard></Dashboard>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        
      </Switch>
      </Router>
  </UserContext.Provider>
      
  );
}

export default App;

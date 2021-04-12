import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appointments from './component/Appointments/Appointments/Appointments';


const [loggedInUser, setLoggedInUser] = useState({});
function App() {
  return (
   
    <Router >
      <Switch>

        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/Appointments">
           <Appointments></Appointments>
        </Route>
        
      </Switch>
      </Router>
      
  );
}

export default App;

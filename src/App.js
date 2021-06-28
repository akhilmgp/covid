import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import India from './components/India';
import Worldwide from './components/Worldwide';
import { MdDashboard, MdPublic, MdLocationCity } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <Router>
      <React.Fragment>
            <div className="sidebar">
                <div className="main-logo">
                  <div className="logo-t">COVID19</div>
                  <div className="logo-b">DASHBOARD</div>
                </div>
                <ul className="menu-items">
                    <li><Link to="/"><MdDashboard/></Link></li>
                    <li><Link to="/india"><MdPublic/></Link></li>
                    <li><Link to="/worldwide"><MdLocationCity/></Link></li>
                </ul>
            </div>
      </React.Fragment>
      <Switch>
        <Route exact path="/"><India/></Route>
        {/* <Route  path="/"><Details/></Route> */}
        <Route path="/worldwide"><Worldwide/></Route>
      </Switch>
      </Router> 
    </div>
  );
}

export default App;

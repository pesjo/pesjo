import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages'
import About from './pages/about'
import Sweep from './pages/sweep'
import Tottot from './pages/tottot'
import Teamf from './pages/teamf'
import Portfolio from './pages/portfolio'




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="page-container"
      style={{
        backgroundColor: '#131515',
        height: '100%',
        position: 'relative',
      }}
    >

      <div className="page-wrap">
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          {/* <Navbar toggle={toggle} /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sweep" component={Sweep} />
            <Route path="/tottot" component={Tottot} />
            <Route path="/teamf" component={Teamf} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

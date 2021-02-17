import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom"

import './App.css';
import StickyMenu from "./components/ui-elements/Header/StickyMenu/StickyMenu.component"
import Landing from "./components/pages/Landing/Landing.component"
import OneToOneCoaching from './components/pages/OneToOneCoaching/OneToOneCoaching.component';

const App = () => {
  const location = useLocation()
  return (
    <div className="App">
    {
      location.pathname !== "/" ? <StickyMenu/> : null
    }
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/services/onetoonecoaching" component={OneToOneCoaching} />
      </Switch>
    </div>
  );
}

export default App;
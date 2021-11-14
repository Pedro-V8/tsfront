import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';
import React  from 'react'


import { Home } from './pages/Home';



export function Routes(): React.ReactElement {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

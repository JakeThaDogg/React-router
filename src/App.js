import React, {Component} from 'react'
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import './App.css'
import Home from './Home.js'
import History from './History.js'

class App extends Component {

  render () {
    return (<BrowserRouter>
      <div>
        <NavLink exact to='/' >
            Home
        </NavLink>
        <NavLink exact to='/notre-histoire' id='hist' activeStyle={{color: 'red'}} >
              History
        </NavLink>
        <Switch>
          <Route exact='exact' path='/' component={Home} />
          <Route path='/notre-histoire' component={History} />
        </Switch>
      </div>

    </BrowserRouter>)
  }
}

export default App

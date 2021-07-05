import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';

export class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path ="/"><Main/></Route>
      <Route path="/favi"><Favorite/></Route>
    </Switch>
    </BrowserRouter>
    )
  }
}

export default App

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Home } from './Components/Home';
import { Java } from './Components/Java';
import { Header } from './Components/_tpl/Header';
import { Csharp } from './Components/Csharp';
import { Php } from './Components/Php';
import $ from 'jquery';
import './css/layout.css';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './JS/app.js';

import './Layout/layout.css';

class App extends Component {


  handlesocket(list){
  let lists = this.state.lists;
    lists.push(list);
      this.setState({lists:lists})

  }


  render() {
    return (
      <div className="App">
        <Header />
          <div className="App-header">
            <Home />
            <Csharp />
            <Php />
          </div>
      </div>
    );
  }
}

export default App;

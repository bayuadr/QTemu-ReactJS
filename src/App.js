import React, { Component } from 'react';
import Menu from './Menu.js';
import Footer from'./Footer.js';
import Container from './Container.js'

class App extends Component {
  render() {
    
    return (
      <div style={{flexGrow:'1',margin:0}}>
        <Menu/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}

export default App;

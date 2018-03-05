
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

      let colours = ['#6edada','#fdc331','#FF7F50','#d00984','#4e5dce','#ffe900'];

      let fonts = ['monospace', 'fantasy', 'sans-serif', 'cursive'];

      let randomColor = colours[Math.floor(Math.random() * colours.length)];
      let fuente = fonts[Math.floor(Math.random() * fonts.length)];

      let styls = {
        backgroundColor: randomColor,
        fontFamily: fuente,
        color: 'white',
        textAlign: 'center',
        height: '150px',
        width:'400px',
        fontSize: '2.5rem',
        paddingTop: '.5em'

  };

    return (
      <div style={styls}>
       <p>
         HI, girl :)
       </p>
     </div>
    );
  }
}


export default App;

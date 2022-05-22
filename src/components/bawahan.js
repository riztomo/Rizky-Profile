import React from "react";
import logo from './pictures/logo.svg';

import "./bawahan.css"

function Bawahan(props) {
    return(
      <div>
        <footer className='App-footer'>
          <p></p>
          <a href="/">Back to top menu</a>
          <p></p>
          <p>Created using React. <a href='https://reactjs.org/' className='App-link'>Create yours now.</a></p>
          <img src={logo} className="App-logo" alt="logo"/>
          <p></p>
        </footer>
      </div>
    );
  }

  export default Bawahan;
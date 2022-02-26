import React from 'react'
import logo from './logo.svg';
import "./Header.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
  );
}

export default Header;
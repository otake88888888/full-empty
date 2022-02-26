
import React from 'react'
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amp-config.json'

Amplify.configure({
  Auth: {
    identityPoolId: config.identityPoolId,
    region: config.region,
    userPoolId: config.userPoolId,
    userPoolWebClientId: config.userPoolWebClientId
  }
});

Auth.configure();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default withAuthenticator(App,{ hideSignUp: true });

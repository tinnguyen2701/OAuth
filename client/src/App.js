import React from 'react';
import GoogleLogin from 'react-google-login';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { GET_OAUTH_REQUEST, GET_OAUTH_FB_REQUEST } from './duck';
import FacebookLogin from 'react-facebook-login';

function App() {
    const responseGoogle = (response) => {
      store.dispatch({type: GET_OAUTH_REQUEST, payload: response})
    }

    const responseFacebook = (response) => {
      store.dispatch({type: GET_OAUTH_FB_REQUEST, payload: response})
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FacebookLogin
        appId="959756107708923"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
      <GoogleLogin 
        clientId='815737839046-mdn1u1489c5sk11bhba2h1b7b94lk770.apps.googleusercontent.com'
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="btn btn-outline-danger"
      />
    </div>
  );
}

export default App;

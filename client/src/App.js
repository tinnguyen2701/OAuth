import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { GET_TITLE_REQUEST } from './duck';

function App() {

  useEffect(() => {
    store.dispatch({type: GET_TITLE_REQUEST})
  }, [])

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
    </div>
  );
}

export default App;

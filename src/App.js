/*import React from 'react';
import logo from './logo.svg';
import './App.css';

import teamData from './data.js'

import Form from './form'

function App() {
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

export default App;*/

import React, { useState } from 'react';

import Form from './form';
import TeamList from './teamlist';
import data from './data';



function App() {

  const [members, setMembers] = useState(data);

  const addNewPerson = person => {
    setMembers([...members, person])
  }


  return (

    <div>

      <h1>Nick's Team</h1>
      <TeamList teamList={members} />
      <Form addNewPerson={addNewPerson} />
      </div>
  );
}
export default App;

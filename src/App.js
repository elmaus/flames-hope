import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  	const [mode, setMode] = useState('flames');
  	const [name1, setName1] = useState('');
  	const [name2, setName2] = useState('');
  	const [result, setResult] = useState('Your Reuslt is..');

  	const filterout = () => {
    	let tempname1 = ''
    	let tempname2 = ''
    	for (let i=0; i<name1.length; i++) {
      		if (name2.includes(name1[i])) {
        	continue;
      		}
      		tempname1 += name1[i]
    	}

    	for (let i=0; i<name2.length; i++) {
      		if (name1.includes(name2[i])) {
        		continue;
      		}
      		tempname2 += name2[i]
    	}

    return tempname1.length + tempname2.length
  }

  const getResult = () => {
    let leftOver = filterout();
    let relationNumber = 0;
    let mods = ['sweet', 'freind', 'lover', 'affectionate', 'marriage', 'enemy'];
    if (mode == 'flames') {
      
      relationNumber = leftOver % 6
      
    }

    setResult(mods[relationNumber])
  } 

  return (
    <div className="App bg-dark">
      <h1 className="text-light">Welcome to Flames Hope</h1>
      <p className="text-light">{result}</p>
      <div>
        <label className="text-light" >Your Name</label>
        <input type="text" onChange={e => {setName1(e.target.value)}}/>
        <label className="text-light">Name of your crush</label>
        <input type="text" onChange={e => {setName2(e.target.value)}}/>
        <input type="submit" onClick={getResult} value="Calculate"/>
      </div>
    </div>
  );
}

export default App;

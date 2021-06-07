import React, { useState } from 'react';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  	const [mode, setMode] = useState('flames');
  	const [name1, setName1] = useState('');
  	const [name2, setName2] = useState('');
  	const [result, setResult] = useState('Your Relationship is..');

	const finalResult = (theResult) => {
		setResult(theResult)
	}

	const reset = () => {
		setResult('Your Relationship is...');
		document.querySelector('#input1').value = '';
		document.querySelector('#input2').value = '';
		setName1('');
		setName2('')
	}

	const onTyping1 = (e) => {
		setName1(e)
		setResult('Your Relationship is...');
	}

	const onTyping2 = (e) => {
		setName2(e)
		setResult('Your Relationship is...');
	}

  return (
    <div className="App pb-5 bg-dark">
      <h1 className="text-light p-5 fw-bold">Flames Hope</h1>
      
      <div>
	  	<label class="form-label text-light pt-5">Your Name</label>
        <input id="input1" className="form-control form-control-lg" type="text" onChange={e => {onTyping1(e.target.value)}}/>
        <label class="form-label text-light pt-4">Name of your flames/hope</label>
        <input id="input2" className="form-control form-control-lg" type="text" onChange={e => {onTyping2(e.target.value)}}/>
        
		<h3 className="text-light p-5 fw-bold">{result}</h3>

		<Buttons isactive={(name1 && name2) ? "" : "disabled"} toset={finalResult} res={reset} name1={name1} name2={name2}/>
      </div>
	  <small className="text-light pt-5">by: Samule Camus</small>
    </div>
  );
}

export default App;

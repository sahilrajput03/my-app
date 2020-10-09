import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {useStopInfiniteRender} from './myHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactBoilerPlateThumbNail />
        <Child />
      </header>
    </div >
  );
}

const Child = () => {
  const [count, setCount] = useState(0);

  //? ONLY SPECIFIED NO.OF RE - RENDERS WOULD OCCUR.
  useStopInfiniteRender(7000);

  //! THIS IS FAULTY USEEFFECT....😕😕😕😕 
  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <br />
      <button onClick={() => setCount(count + 1)}>Click to increment</button>
    </div>
  );
};
export default App;

const ReactBoilerPlateThumbNail = () => (
  <>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      So, is the code working??
      And do you mindif that won't work??
        </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
        </a>
  </>
);


// {React.useCallback.toString()}
// {React.useImperativeHandle.toString()}



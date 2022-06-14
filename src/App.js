import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from './redux/actions/action';

function App() {
  const myState = useSelector((state) => state.output);
  const dispatch = useDispatch();
  return (
    <div className='div'>
      <br></br>
      <h1>Redux</h1>
      <br></br>
      <br></br>
      <button onClick={ () => dispatch(incNumber())}>increment</button>
      <input placeholder='0' value={myState} />
      <button onClick={ () => dispatch(decNumber())}>decrement</button>
    </div>
  )
}

export default App
import { useState } from 'react';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [counter , newState] = useState(0);
  let incrementHandler=()=>{
    // console.log(counter+1);
    newState(counter+1);

  }
  let resetHandler=()=>{
    newState(0);
  }
 let decrementHandler=()=>{
    // console.log(counter-1);
    newState(counter-1);
  }
  return (
    <div className="container">
    <div className="block">
        <div className="counter">
            <h3 className='co'>Counter</h3>
            <h1>{counter}</h1>
        </div>
        <div>
            <button onClick={incrementHandler} id="btn" type="button" className="btn btn-success">Increase</button>
            <button onClick={resetHandler}  type="button" className="btn btn-warning">Reset</button>
            <button onClick={decrementHandler}  id="btn1" type="button" className="btn btn-danger">Decrease</button>
        </div>
    </div>
</div>
  );
}

export default App;

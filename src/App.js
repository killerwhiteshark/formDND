import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, SIGN_IN, SIGN_OUT, number } from "./actions";

import Form from "./components/form";

function App() {
  // const [num, setNum] = useState(0);
  // const counter = useSelector((state)=> state.counter.count);
  // const num = useSelector(state => state.counter.number)
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Form />
        {/* <div style={{marginRight: 10}}>{counter}</div>
        <input type="number" onChange={(e) => dispatch(number(Number(e.target.value)))} value={num}></input>
        <button onClick={() => dispatch(increment(num))}>+</button>
        <button onClick={() => dispatch(decrement(num))}>-</button>
        {isLogged ? <p style={{color: "rgb(51, 255, 0)", backgroundColor:"blue"}}>IS LOGGED IN</p> : <p style={{color:"red", backgroundColor:"black"}}>IS LOGGED OUT</p>}
        <button onClick={() => dispatch(SIGN_IN())}>SIGN IN </button>
        <button onClick={() => dispatch(SIGN_OUT())}>SIGN_OUT</button> */}
    </div>
      );
    };
    export default App;

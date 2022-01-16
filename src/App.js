import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from './state/index';

function App() {
  const [userAmount,setUserAmount] =useState(0)
  const state = useSelector((state)=>state.account)

  const dispatch = useDispatch();

  const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);


  return (
    <div className="App">
        <h1>Royal Banks</h1>
        <h1>{state}</h1>

        <h4>Type the Amount</h4>
        <input placeholder="type the Amount" onChange={(e)=>setUserAmount(e.target.value)} value={userAmount} type="number"></input>
        <div>
          <button onClick={()=>depositMoney(100)}>Deposit</button>
          <button onClick={()=>withdrawMoney(100)}>Withdraw</button>
        </div>
    </div>
  );
}

export default App;

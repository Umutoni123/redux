import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, subtractNumber } from '../redux/counterReducer';
const Counter = () => {
   const dispatch = useDispatch()
   const mycount = useSelector((state) => state.ReducerCount.count)
  return (
    <div>
        <h1>Counter App</h1>
        <p>{mycount}</p>
        <button onClick={() => dispatch(addNumber())}>ADD</button>
        <button onClick={() => dispatch(subtractNumber())}>SUBTRACT</button>
    </div>
  )
}

export default Counter;

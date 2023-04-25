import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Counter/CounterSlice";
function Burger() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
        <br /><br />
      <button className='btn btn-success' onClick={()=>dispatch(increment())}>
        Increment
      </button>
      <h1>{count}</h1>
      <button className='btn btn-success' onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Burger;

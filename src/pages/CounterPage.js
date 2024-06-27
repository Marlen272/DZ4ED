import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount, reset, selectCount } from '../store/CounterSlider';

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            <button onClick={() => dispatch(decrementByAmount(10))}>-10</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
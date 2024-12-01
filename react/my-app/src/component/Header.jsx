import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice';
import { addArray, addObj } from '../redux/apiSlice';

function Header() {
    const count = useSelector((state) => state.counter.value);
    const myobj = useSelector((state) => state.api.dummyObj);
    const myarray = useSelector((state) => state.api.dummyArray);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => {
                            dispatch(increment())
                            dispatch(addObj({ a: 10 }))
                            dispatch(addArray([{ name: "rahul" }]))
                        }}
                    >
                        Increment
                    </button>
                    <span>{count} and {myobj.a}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(incrementByAmount(20))}
                    >
                        Decrement
                    </button>
                </div>
                {myarray.map((e, i) => {
                    return (
                        <p>{e.name}</p>
                    )
                })}
            </div>
        </>
    )
}

export default Header

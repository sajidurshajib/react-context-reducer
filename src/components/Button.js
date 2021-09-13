import React, { useContext } from 'react'
import { Count } from '../allContext'

const Button = () => {
    const { state, dispatch } = useContext(Count)
    return (
        <div className="btn">
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
        </div>
    )
}

export default Button

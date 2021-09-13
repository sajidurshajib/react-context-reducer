import React, { useContext } from 'react'
import { Count } from '../App'

const Button = () => {
    const { state, dispatch } = useContext(Count)
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</button>
        </div>
    )
}

export default Button

import { useReducer, createContext } from 'react'
import './App.css'
import Button from './components/Button'

// usereducer
const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: action.payload }
        default:
            return state
    }
}

//createContext
export const Count = createContext()

const App = () => {
    // useReducer
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="App">
            <Count.Provider value={{ state, dispatch }}>
                <Button />
            </Count.Provider>
        </div>
    )
}

export default App

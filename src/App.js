import { useReducer } from 'react'
import './App.css'
import { Count } from './allContext'
import Button from './components/Button'
import { initialState, reducer } from './reducer'

const App = () => {
    // useReducer execute reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App">
            {/* wrap by context */}
            <Count.Provider value={{ state, dispatch }}>
                <Button />
            </Count.Provider>
        </div>
    )
}

export default App

import {useState} from "react";
import './App.css'

function App() {
    
    const [count , setCount] = useState(0);

    return (
        <div className = "counter-container">
            <h1>Counter App</h1>
              <p className="description">
              A simple React counter application
             </p>

            <div className = "counter-value">{count}</div> 

            <div className = "button-container">

            <button 
                className = "increment-button"
                onClick={() => setCount(count + 1)}>
            +
            </button>  

            <button 
                className = "decrement-button" 
                onClick ={() => setCount(count -1)}>
            -
            </button>

            <button 
                className = "reset-button" 
                onClick={() => setCount(0)}>
            Reset
            </button>
        </div>
       </div>
    );
}

export default App;
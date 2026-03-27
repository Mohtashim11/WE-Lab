import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  const [history, setHistory] = useState([])
  return (
    <>
      <section id="center">
        <div className="counter">
          {count}
        </div>

        <div className="buttonRow">

        <button
          onClick={() => {
            if(count!=0){setCount((count) => {return count - 1})
            setHistory((prev) => [...prev, "Decrement"]);
          }}}>
          Decrement
        </button>
        
        <button
          onClick={() => {
            setCount(0)
            setHistory((prev) => [...prev, "Reset"]);
          }}>
          Reset
        </button>
        
        <button
          onClick={() => {setCount((count) =>{ 
            return count + 1;
          })
          setHistory((prev) => [...prev, "Increment"]);
        }}
        >
          Increment
        </button>
        
        </div>
        
        <section>
        <h3>History</h3>
        
        <div className="historySection">

        {history.length === 0 ? (
          <p>No actions yet</p>
        ) : (
          history.map((item, index) => (
            <div key={index}>{item}</div>
          ))
          )}
        </div>
        </section>
      </section>
      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [celsius,setCelsius] = useState("")
  const [farenheit,setFarenheit] = useState("")
  const [history, setHistory] = useState([])
  return (
    <>
      <section id="center">
        <h2>Temperature Converter</h2>
        <div>
         <label>Celsius: </label>
         <input
            className='counter'
            type="text"
            value={celsius}
            onChange={(e) => {
              const c=e.target.value
              const f=(c*9/5)+32
              setCelsius(c)
              setFarenheit(f)
              if(c!="")setHistory((prev)=>[...prev,c + "℃ -> " + f+"℉"])
            }}
            placeholder="℃"
          />
        </div>
        <div>
          <label>Farenheit: </label> 
          <input
            className='counter'
            type="text"
            value={farenheit}
            onChange={(e) => {
              const f=e.target.value
              const c=(f-32)*5/9
              setFarenheit(f)
              setCelsius(c)
              if(f!="")setHistory((prev)=>[...prev,f+'℉->'+c+'℃'])
            }}
            placeholder="℉"
          />
        </div>
        
        <h3>History</h3>
        <div className='historySec'>
        {history.length === 0 ? (
          <p>No actions yet</p>
        ) : (
          history.map((item, index) => (
            <div key={index}>{item}</div>
          ))
          )}
        </div>
      </section>
    </>
  )
}

export default App

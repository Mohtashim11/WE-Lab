import { use, useState } from 'react'
import keyboard from './assets/keyboard.png'
import keyboard2 from './assets/keyboard2.png'
import mouse from './assets/mouse.png'
import mouse2 from './assets/mouse2.png'
import monitor from './assets/monitor.png'
import monitor2 from './assets/monitor2.png'
import laptop from './assets/laptop.png'
import laptop2 from './assets/laptop2.png'
import './App.css'

function App() {
  const product=[
    {name:"Laptop",price:50000,url:laptop},
    {name:"Monitor",price:15000,url:monitor},
    {name:"Keyboard",price:8000,url:keyboard},
    {name:"Mouse",price:4000,url:mouse},
    {name:"Laptop",price:70000,url:laptop2},
    {name:"Monitor",price:10000,url:monitor2},
    {name:"Keyboard",price:10000,url:keyboard2},
    {name:"Mouse",price:2000,url:mouse2}
  ]
  const [text,setText]=useState("")
  const [filterOn,setFilterOn]=useState("")
  const [sortOrder,setSortOrder]=useState("asc")
  return (
    <>
      <section id="center">
        <div>
        
        <input
            className='counter'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search"
          /> 
        
        <button onClick={()=>{
          if(filterOn!==""){
            setText("")
            setFilterOn("")
          }
          else{
            setFilterOn(text)
          }
          }}>
          {filterOn!=="" ? "Clear Filter": "Filter"}
        </button>
        
        <button onClick={()=>setSortOrder((prev)=> prev==="asc" ? "desc":"asc")}>
          {sortOrder==="asc" ? "Ascending":"Descending"}
        </button>
        
        </div>

        <h2>Product List</h2>
        <div className="card-container">
          {[...product].filter(
            (p)=> filterOn==="" || p.name.toLowerCase()===filterOn.toLowerCase() 
          ).sort((a,b)=>(
            sortOrder==="asc"? a.price-b.price : b.price-a.price
          )).map((data,index)=>(
            <div className="card" key={index}>
              <img src={data.url} alt={data.name}/>
              <p>Name:{data.name}</p>
              <p>Price:{data.price}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App

import { useState } from 'react'
import RegistrationForm from './Components/registrationForm'
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [sortOrder,setSortOrder]=useState("asc")
  const [text,setText]=useState("")
  const [filterOn,setFilterOn]=useState("")
  return (
    <>
      <RegistrationForm setList={setStudents}/>
      <section id='center'>
        <h2>Students Table</h2>
        <div className='filterRow'>
        
        <input
            className='counter'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder=""
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
        
        <div className='tableSec'>
        
          <table>
            <thead>
              <tr><th>Index</th><th>Name</th><th>Subject</th><th>Marks</th></tr>
            </thead>
            <tbody>
              {[...students].filter((a)=>(
                (filterOn==="" || a.subject===filterOn)
              )).sort((a,b)=>(
                sortOrder==="asc"?a.marks-b.marks:b.marks-a.marks
              )).map((s,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{s.name}</td>
                  <td>{s.subject}</td>
                  <td>{s.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
        </div>
      </section>
    </>
  )
}

export default App

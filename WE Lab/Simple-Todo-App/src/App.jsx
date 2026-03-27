import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText]=useState("")
  const [task, setTask] = useState([])
  const deleteTask = (indexToDelete) => {
    setTask((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const toggleStatus = (indexToUpdate) => {
    setTask((prev) =>
      prev.map((item, index) =>
        index === indexToUpdate
          ? {
              ...item,
              status:
                item.status === "incomplete" ? "complete" : "incomplete",
            }
          : item
      )
    );
  };
  return (
    <>
      <section id="center">
        <div className='counter'>
          <input
            className='counter'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Task"
          />
          <button
              className="counter"
              onClick={() => {
                setText("")
                setTask((prev) => [...prev,{task:text,status:"incomplete"}])
              }}
          >
            Add Task
          </button>
        </div>
        <h2>Tasks</h2>
        <div className="tableSec">
          <table >
            <thead>
              <tr><th>Index</th><th>Task</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {task.map((task,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{task.task}</td>
                  <td>{task.status}</td>
                  <td>
                    <button onClick={() => toggleStatus(index)}>
                      {task.status === "incomplete" ? "Mark Complete" : "Undo"}
                    </button>

                    <button onClick={() => deleteTask(index)}>
                      Delete
                    </button>
                  </td>
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

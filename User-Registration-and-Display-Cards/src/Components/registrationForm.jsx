import { useState } from "react";

function RegistrationForm(){
const [formData, setFormData] = useState({
  name: '',
  age:'',
  email: '',
  password: ''
});
const [list,setlist]=useState([])
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted:', formData);
  setlist((prev) => [...prev,{...formData}] )
};
return (
  <>
  <section id='center'>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        <br></br>
        <label>Age:</label>
        <input name="age" value={formData.age} onChange={handleChange} />
        <br></br>
        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        <br></br>
        <label>Password:</label>
        <input name="password" value={formData.password} onChange={handleChange} />          
        <br></br>
        <button type="submit">
            Register
        </button>
    </form>
    <h2>List</h2>
    <div className="card-container">
      {list.length===0 ? (<p>No Data</p>):(list.map((data,index)=>(
        <div className="card" key={index}>
          <p>Name:{data.name}</p>
          <p>Age:{data.age}</p>
          <p>Email:{data.email}</p>
          <p>Password:{data.password}</p>
        </div>
      )))}
    </div>
    </section>
    </>
  );
}
export default RegistrationForm;
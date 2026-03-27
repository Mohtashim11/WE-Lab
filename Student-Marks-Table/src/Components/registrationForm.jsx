import { useState } from "react";

function RegistrationForm({setList}){
const [formData, setFormData] = useState({
  name: '',
  subject:'',
  marks: ''
});
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted:', formData);
  setList((prev) => [...prev,{...formData}] )
};
return (
  <>
  <section id='center'>
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" value={formData.name} onChange={handleChange} />
        <br></br>
        <label>Subject: </label>
        <input name="subject" value={formData.subject} onChange={handleChange} />
        <br></br>
        <label>Marks: </label>
        <input name="marks" value={formData.marks} onChange={handleChange} />
        <br></br>
        <button type="submit">
            Register
        </button>
    </form>
    </section>
    </>
  );
}
export default RegistrationForm;
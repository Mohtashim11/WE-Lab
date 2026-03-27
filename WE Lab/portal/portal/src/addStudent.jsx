import { useState } from "react";

export default function AddStudent({ students, setStudents, usedEmails }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    semester: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usedEmails.has(form.email)) {
      alert("Email already used!");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      ...form,
      credentialEmail: `${form.firstName.toLowerCase()}.${form.lastName.toLowerCase()}@university.com`
    };

    usedEmails.add(form.email);
    setStudents([...students, newStudent]);

    // reset form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      semester: "",
      year: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "0 auto"
      }}>

        {/* Heading */}
        <h2 style={{
          fontWeight: "bold",
          color: "black",
          marginBottom: "20px",
          fontSize: "26px"
        }}>
          Add Student
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="semester"
            placeholder="Semester (1-8)"
            value={form.semester}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Button */}
          <button type="submit" style={{
            background: "#22c55e",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Add Student
          </button>

        </form>
      </div>
    </div>
  );
}

// reusable input style
const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none"
};
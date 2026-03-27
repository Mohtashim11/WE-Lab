import { useState } from "react";

const semesterCourses = {
  1: ["English", "Maths", "Programming Fundamentals"],
  2: ["OOP", "Physics", "Differentiation and Integration"],
  3: ["Data Analytics", "Islamiat", "PST"],
  4: ["Statics", "DBMS", "Business Communication"],
  5: ["AI", "ML", "Computer Architecture and Organization"],
  6: ["Information Technology", "DSA", "Discrete Structures"],
  7: ["Differential Integrals", "Theory of Automata", "Theory of Programming Languages"],
  8: ["Computer Communication Network", "Information Security", "Web Engineering", "Cyber Security", "Game Development", "Operating Systems"],
};

export default function CourseRegistration({ students, registeredCourses, setRegisteredCourses }) {
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleRegister = () => {
    if (!selectedStudentId || !selectedSemester) return;

    // Get the selected student
    const selectedStudent = students.find(s => s.id === Number(selectedStudentId));
    const studentName = selectedStudent ? `${selectedStudent.firstName} ${selectedStudent.lastName}` : "";

    setRegisteredCourses({
      ...registeredCourses,
      [selectedStudentId]: {
        studentName: studentName,
        courses: selectedCourses.map(c => ({ name: c, attendance: 100 }))
      }
    });

    setSelectedCourses([]);
  };

  const courses = semesterCourses[selectedSemester] || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>Course Registration</h2>

      <div style={{ marginBottom: "15px" }}>
        <select
          value={selectedStudentId}
          onChange={e => setSelectedStudentId(e.target.value)}
          style={{ padding: "5px 10px", marginRight: "10px" }}
        >
          <option value="">Select Student</option>
          {students.map(s => (
            <option key={s.id} value={s.id}>
              {s.firstName} {s.lastName}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Semester (1-8)"
          value={selectedSemester}
          onChange={e => setSelectedSemester(e.target.value)}
          style={{ padding: "5px 10px", width: "150px" }}
        />
      </div>

      {courses.map(course => (
        <div key={course} style={{ marginBottom: "5px" }}>
          <label>
            <input
              type="checkbox"
              checked={selectedCourses.includes(course)}
              onChange={e => {
                if (e.target.checked) setSelectedCourses([...selectedCourses, course]);
                else setSelectedCourses(selectedCourses.filter(c => c !== course));
              }}
              style={{ marginRight: "5px" }}
            />
            {course}
          </label>
        </div>
      ))}

      {courses.length > 0 && (
        <button
          onClick={handleRegister}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            background: "#38a169",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Register Selected Courses
        </button>
      )}
    </div>
  );
}
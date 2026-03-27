import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home.jsx";
import AddStudent from "./addStudent.jsx";
import Students from "./students.jsx";
import CourseRegistration from "./courseRegistration.jsx";
import RegisteredCourses from "./registeredCourses.jsx";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState({});
  const [usedEmails] = useState(new Set());

  return (
    <div className="app-container">

      {/* 🔵 NAVBAR */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Student</Link>
          <Link to="/students">Students</Link>
          <Link to="/courses">Course Registration</Link>
          <Link to="/registered">Registered Courses</Link>
        </div>
      </nav>


      {/* 📄 PAGE CONTENT */}
      <div className="page-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/add"
            element={
              <AddStudent
                students={students}
                setStudents={setStudents}
                usedEmails={usedEmails}
              />
            }
          />

          <Route
            path="/students"
            element={<Students students={students} />}
          />

          <Route
            path="/courses"
            element={
              <CourseRegistration
                students={students}
                registeredCourses={registeredCourses}
                setRegisteredCourses={setRegisteredCourses}
              />
            }
          />

          <Route
            path="/registered"
            element={
              <RegisteredCourses
                registeredCourses={registeredCourses}
              />
            }
          />

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />

        </Routes>
      </div>
    </div>
  );
}
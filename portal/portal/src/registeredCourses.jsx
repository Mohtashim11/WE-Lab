export default function RegisteredCourses({ registeredCourses }) {
  const styles = {
    container: {
      padding: "20px"
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px"
    },
    card: {
      position: "relative",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    },
    topLeft: {
      position: "absolute",
      top: "15px",
      left: "15px",
      fontWeight: "bold",
      fontSize: "16px",
      color: "#333"
    },
    topRight: {
      position: "absolute",
      top: "15px",
      right: "15px",
      fontWeight: "bold",
      color: "#0066cc"
    },
    middle: {
      marginTop: "40px"
    },
    courseItem: {
      padding: "10px",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    courseName: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#333"
    },
    attendance: {
      fontSize: "14px",
      color: "#28a745",
      fontWeight: "500"
    },
    noData: {
      color: "#666",
      fontStyle: "italic"
    }
  };

  if (!registeredCourses || Object.keys(registeredCourses).length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Registered Courses</h2>
        <p style={styles.noData}>No courses registered yet.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registered Courses</h2>
      {Object.entries(registeredCourses).map(([studentId, studentData]) => {
        if (!studentData.courses || studentData.courses.length === 0) return null;
        
        return (
          <div key={studentId} style={styles.card}>
            {/* Top Left - Student Name */}
            <div style={styles.topLeft}>
              {studentData.studentName}
            </div>
            
            {/* Top Right - Semester */}
            <div style={styles.topRight}>
              Semester 6
            </div>
            
            {/* Middle - All Courses */}
            <div style={styles.middle}>
              {studentData.courses.map((course, index) => (
                <div key={index} style={styles.courseItem}>
                  <span style={styles.courseName}>{course.name}</span>
                  <span style={styles.attendance}>Attendance: {course.attendance}%</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
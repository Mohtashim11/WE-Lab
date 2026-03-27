export default function Students({ students }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Student List</h2>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <thead style={{ background: "#f0f0f0" }}>
          <tr>
            {["ID","First Name","Last Name","Email","Age","Semester","Year","Credential Email"].map(header => (
              <th key={header} style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ccc" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.id}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.firstName}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.lastName}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.email}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.age}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.semester}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.year}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{s.credentialEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
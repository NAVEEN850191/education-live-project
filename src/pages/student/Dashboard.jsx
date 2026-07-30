import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    courses: 0,
    assignments: 0,
    attendance: 0,
    notes: 0
  });

  useEffect(() => {

    Promise.all([
      fetch("http://localhost:5000/api/courses").then(res => res.json()),
      fetch("http://localhost:5000/api/assignments").then(res => res.json()),
      fetch("http://localhost:5000/api/attendance").then(res => res.json()),
      fetch("http://localhost:5000/api/notes").then(res => res.json())
    ])
    .then(([courses, assignments, attendance, notes]) => {

      setStats({
        courses: courses.data.length,
        assignments: assignments.data.length,
        attendance: attendance.data.length,
        notes: notes.data.length
      });

    })
    .catch(console.error);

  }, []);

  return (
    <Layout>

      <h1>Student Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Courses</h3>
          <p>{stats.courses}</p>
        </div>

        <div className="card">
          <h3>Assignments</h3>
          <p>{stats.assignments}</p>
        </div>

        <div className="card">
          <h3>Attendance Records</h3>
          <p>{stats.attendance}</p>
        </div>

        <div className="card">
          <h3>Notes</h3>
          <p>{stats.notes}</p>
        </div>

      </div>

    </Layout>
  )
}

export default Dashboard;
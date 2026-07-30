import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AttendanceCard from "../../components/AttendanceCard";
import "./Attendance.css";

function Attendance() {

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/attendance")
      .then((response) => response.json())
      .then((data) => {

        setAttendance(data.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <Layout>

      <h1 className="page-title">
        Attendance
      </h1>

      <div className="cards">

        {attendance.map((record) => (
          <AttendanceCard
            key={record.id}
            studentName={record.studentName}
            course={record.course}
            date={record.date}
            status={record.status}
          />
        ))}

      </div>

    </Layout>
  )
}

export default Attendance;
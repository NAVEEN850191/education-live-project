import "./AttendanceCard.css";

function AttendanceCard({
  studentName,
  course,
  date,
  status
}) {

  return (
    <div className="card">

      <h3>{studentName}</h3>

      <p>
        Course: {course}
      </p>

      <p>
        Date: {date}
      </p>

      <p
        className={
          status === "Present"
            ? "present"
            : "absent"
        }
      >
        {status}
      </p>

    </div>
  )
}

export default AttendanceCard;
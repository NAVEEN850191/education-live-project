import "./CourseCard.css";

function CourseCard({
  courseName,
  courseCode,
  teacher
}) {
  return (
    <div className="card">
      <h3>{courseName}</h3>
      <p>
        Course Code: {courseCode}
      </p>
      <p>
        Teacher: {teacher}
      </p>
    </div>
  )
}

export default CourseCard;
import "./AssignmentCard.css";

function AssignmentCard({
  title,
  subject,
  dueDate,
  totalMarks
}) {
  return (
    <div className="card">

      <h3>{title}</h3>

      <p>
        Subject: {subject}
      </p>

      <p>
        Due Date: {dueDate}
      </p>

      <p>
        Total Marks: {totalMarks}
      </p>

    </div>
  )
}

export default AssignmentCard;
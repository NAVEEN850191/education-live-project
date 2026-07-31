import "./TaskCard.css";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <p>{task}</p>
    </div>
  );
}

export default TaskCard;
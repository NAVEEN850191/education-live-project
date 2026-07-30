import "./NoteCard.css";

function NoteCard({
  title,
  subject,
  uploadedBy,
  fileUrl
}) {
  return (
    <div className="card">

      <h3>{title}</h3>

      <p>
        Subject: {subject}
      </p>

      <p>
        Uploaded By: {uploadedBy}
      </p>

      <button>
        Download Notes
      </button>

    </div>
  )
}

export default NoteCard;
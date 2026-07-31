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
        <strong>Subject:</strong> {subject}
      </p>

      <p>
        <strong>Uploaded By:</strong> {uploadedBy}
      </p>

      <p className="file-url">
        <strong>File:</strong> {fileUrl}
      </p>

      <button
        className="download-btn"
        onClick={() => alert(`Opening ${fileUrl}`)}
      >
        View Notes
      </button>

    </div>
  );
}

export default NoteCard;
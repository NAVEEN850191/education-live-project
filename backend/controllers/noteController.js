// Temporary Notes Data

let notes = [
  {
    id: 1,
    title: "Introduction to HTML",
    subject: "Web Development",
    uploadedBy: "Amit Kumar",
    fileUrl: "html_notes.pdf"
  },
  {
    id: 2,
    title: "Normalization",
    subject: "Database",
    uploadedBy: "Sneha Roy",
    fileUrl: "dbms_notes.pdf"
  }
];

// Get all notes
const getAllNotes = (req, res) => {
  res.status(200).json({
    success: true,
    data: notes
  });
};

// Get note by ID
const getNoteById = (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  res.status(200).json({
    success: true,
    data: note
  });
};

// Add new note
const createNote = (req, res) => {
  const { title, subject, uploadedBy, fileUrl } = req.body;

  const newNote = {
    id: notes.length + 1,
    title,
    subject,
    uploadedBy,
    fileUrl
  };

  notes.push(newNote);

  res.status(201).json({
    success: true,
    message: "Note added successfully",
    data: newNote
  });
};

// Update note
const updateNote = (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  note.title = req.body.title || note.title;
  note.subject = req.body.subject || note.subject;
  note.uploadedBy = req.body.uploadedBy || note.uploadedBy;
  note.fileUrl = req.body.fileUrl || note.fileUrl;

  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    data: note
  });
};

// Delete note
const deleteNote = (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  notes = notes.filter((note) => note.id !== id);

  res.status(200).json({
    success: true,
    message: "Note deleted successfully"
  });
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
};
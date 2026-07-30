// Temporary Assignment Data

let assignments = [
  {
    id: 1,
    title: "HTML Basics",
    subject: "Web Development",
    dueDate: "2026-08-10",
    totalMarks: 20
  },
  {
    id: 2,
    title: "SQL Queries",
    subject: "Database",
    dueDate: "2026-08-15",
    totalMarks: 30
  }
];

// Get all assignments
const getAllAssignments = (req, res) => {
  res.status(200).json({
    success: true,
    data: assignments
  });
};

// Get assignment by ID
const getAssignmentById = (req, res) => {
  const id = Number(req.params.id);

  const assignment = assignments.find(
    (assignment) => assignment.id === id
  );

  if (!assignment) {
    return res.status(404).json({
      success: false,
      message: "Assignment not found"
    });
  }

  res.status(200).json({
    success: true,
    data: assignment
  });
};

// Create assignment
const createAssignment = (req, res) => {

  const { title, subject, dueDate, totalMarks } = req.body;

  const newAssignment = {
    id: assignments.length + 1,
    title,
    subject,
    dueDate,
    totalMarks
  };

  assignments.push(newAssignment);

  res.status(201).json({
    success: true,
    message: "Assignment created successfully",
    data: newAssignment
  });

};

// Update assignment
const updateAssignment = (req, res) => {

  const id = Number(req.params.id);

  const assignment = assignments.find(
    (assignment) => assignment.id === id
  );

  if (!assignment) {
    return res.status(404).json({
      success: false,
      message: "Assignment not found"
    });
  }

  assignment.title = req.body.title || assignment.title;
  assignment.subject = req.body.subject || assignment.subject;
  assignment.dueDate = req.body.dueDate || assignment.dueDate;
  assignment.totalMarks =
    req.body.totalMarks || assignment.totalMarks;

  res.status(200).json({
    success: true,
    message: "Assignment updated successfully",
    data: assignment
  });

};

// Delete assignment
const deleteAssignment = (req, res) => {

  const id = Number(req.params.id);

  const assignment = assignments.find(
    (assignment) => assignment.id === id
  );

  if (!assignment) {
    return res.status(404).json({
      success: false,
      message: "Assignment not found"
    });
  }

  assignments = assignments.filter(
    (assignment) => assignment.id !== id
  );

  res.status(200).json({
    success: true,
    message: "Assignment deleted successfully"
  });

};

module.exports = {
  getAllAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment
};
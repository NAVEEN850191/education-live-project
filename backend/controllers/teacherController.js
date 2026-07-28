// Temporary data (will be replaced with MongoDB later)

let teachers = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    subject: "Java"
  },
  {
    id: 2,
    name: "Sneha Roy",
    email: "sneha@gmail.com",
    subject: "Database"
  }
];

// Get all teachers
const getAllTeachers = (req, res) => {
  res.status(200).json({
    success: true,
    data: teachers
  });
};

// Get teacher by ID
const getTeacherById = (req, res) => {
  const id = Number(req.params.id);

  const teacher = teachers.find((teacher) => teacher.id === id);

  if (!teacher) {
    return res.status(404).json({
      success: false,
      message: "Teacher not found"
    });
  }

  res.status(200).json({
    success: true,
    data: teacher
  });
};

// Add teacher
const createTeacher = (req, res) => {
  const { name, email, subject } = req.body;

  const newTeacher = {
    id: teachers.length + 1,
    name,
    email,
    subject
  };

  teachers.push(newTeacher);

  res.status(201).json({
    success: true,
    message: "Teacher added successfully",
    data: newTeacher
  });
};

// Update teacher
const updateTeacher = (req, res) => {
  const id = Number(req.params.id);

  const teacher = teachers.find((teacher) => teacher.id === id);

  if (!teacher) {
    return res.status(404).json({
      success: false,
      message: "Teacher not found"
    });
  }

  teacher.name = req.body.name || teacher.name;
  teacher.email = req.body.email || teacher.email;
  teacher.subject = req.body.subject || teacher.subject;

  res.status(200).json({
    success: true,
    message: "Teacher updated successfully",
    data: teacher
  });
};

// Delete teacher
const deleteTeacher = (req, res) => {
  const id = Number(req.params.id);

  const teacher = teachers.find((teacher) => teacher.id === id);

  if (!teacher) {
    return res.status(404).json({
      success: false,
      message: "Teacher not found"
    });
  }

  teachers = teachers.filter((teacher) => teacher.id !== id);

  res.status(200).json({
    success: true,
    message: "Teacher deleted successfully"
  });
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
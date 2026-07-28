// Temporary Course Data

let courses = [
  {
    id: 1,
    courseName: "Web Development",
    courseCode: "WD101",
    teacher: "Amit Kumar"
  },
  {
    id: 2,
    courseName: "Database Management System",
    courseCode: "DBMS201",
    teacher: "Sneha Roy"
  }
];

// Get all courses
const getAllCourses = (req, res) => {
  res.status(200).json({
    success: true,
    data: courses
  });
};

// Get course by ID
const getCourseById = (req, res) => {
  const id = Number(req.params.id);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  res.status(200).json({
    success: true,
    data: course
  });
};

// Create course
const createCourse = (req, res) => {
  const { courseName, courseCode, teacher } = req.body;

  const newCourse = {
    id: courses.length + 1,
    courseName,
    courseCode,
    teacher
  };

  courses.push(newCourse);

  res.status(201).json({
    success: true,
    message: "Course created successfully",
    data: newCourse
  });
};

// Update course
const updateCourse = (req, res) => {
  const id = Number(req.params.id);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  course.courseName = req.body.courseName || course.courseName;
  course.courseCode = req.body.courseCode || course.courseCode;
  course.teacher = req.body.teacher || course.teacher;

  res.status(200).json({
    success: true,
    message: "Course updated successfully",
    data: course
  });
};

// Delete course
let deleteCourse = (req, res) => {
  const id = Number(req.params.id);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({
      success: false,
      message: "Course not found"
    });
  }

  courses = courses.filter((course) => course.id !== id);

  res.status(200).json({
    success: true,
    message: "Course deleted successfully"
  });
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
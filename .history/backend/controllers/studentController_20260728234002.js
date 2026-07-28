// Temporary Student Data
let students = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        course: "B.Tech CSE"
    },
    {
        id: 2,
        name: "Priya Das",
        email: "priya@gmail.com",
        course: "BCA"
    }
];

// Get All Students
const getAllStudents = (req, res) => {
    res.status(200).json({
        success: true,
        data: students
    });
};

// Get Student by ID
const getStudentById = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        data: student
    });
};

// Create Student
const createStudent = (req, res) => {
    const { name, email, course } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        email,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student Created Successfully",
        data: newStudent
    });
};

// Update Student
const updateStudent = (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;
    student.email = req.body.email || student.email;
    student.course = req.body.course || student.course;

    res.status(200).json({
        success: true,
        message: "Student Updated Successfully",
        data: student
    });

};

// Delete Student
const deleteStudent = (req, res) => {

    const id = Number(req.params.id);

    students = students.filter(s => s.id !== id);

    res.status(200).json({
        success: true,
        message: "Student Deleted Successfully" });

};

module.exports = {
    getAllStudents, getStudentById,createStudent,  updateStudent, deleteStudent};
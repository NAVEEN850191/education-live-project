import { useState } from "react";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      course: "Computer Science",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      course: "Mathematics",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      course: "Physics",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.course.trim()
    ) {
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...formData,
    };

    setStudents([...students, newStudent]);

    setFormData({
      name: "",
      email: "",
      course: "",
    });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Manage Students
        </h1>

        {/* Add Student */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Student</h2>

          <form
            onSubmit={addStudent}
            className="grid md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="md:col-span-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Add Student
            </button>
          </form>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.email}</td>
                  <td className="p-4">{student.course}</td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500"
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
import { useState } from "react";

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Dr. Robert Smith",
      email: "robert@college.edu",
      department: "Computer Science",
    },
    {
      id: 2,
      name: "Prof. Sarah Johnson",
      email: "sarah@college.edu",
      department: "Mathematics",
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      email: "michael@college.edu",
      department: "Physics",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addTeacher = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.department.trim()
    ) {
      return;
    }

    const newTeacher = {
      id: Date.now(),
      ...formData,
    };

    setTeachers([...teachers, newTeacher]);

    setFormData({
      name: "",
      email: "",
      department: "",
    });
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Manage Teachers
        </h1>

        {/* Add Teacher */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Add New Teacher
          </h2>

          <form
            onSubmit={addTeacher}
            className="grid md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Teacher Name"
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
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="md:col-span-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Add Teacher
            </button>
          </form>
        </div>

        {/* Teachers Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Department</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{teacher.name}</td>
                  <td className="p-4">{teacher.email}</td>
                  <td className="p-4">{teacher.department}</td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteTeacher(teacher.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {teachers.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500"
                  >
                    No teachers found.
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

export default ManageTeachers;
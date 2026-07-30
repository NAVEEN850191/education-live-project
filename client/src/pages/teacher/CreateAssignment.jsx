import { useState } from "react";

const CreateAssignment = () => {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      course: "Computer Science",
      dueDate: "2026-08-10",
      status: "Active",
    },
    {
      id: 2,
      title: "Linear Algebra Worksheet",
      course: "Mathematics",
      dueDate: "2026-08-12",
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    course: "",
    dueDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addAssignment = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.course.trim() ||
      !formData.dueDate
    ) {
      return;
    }

    const newAssignment = {
      id: Date.now(),
      ...formData,
    };

    setAssignments([...assignments, newAssignment]);

    setFormData({
      title: "",
      course: "",
      dueDate: "",
      status: "Active",
    });
  };

  const deleteAssignment = (id) => {
    setAssignments(
      assignments.filter((assignment) => assignment.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create Assignment
        </h1>

        {/* Assignment Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            New Assignment
          </h2>

          <form
            onSubmit={addAssignment}
            className="grid md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="title"
              placeholder="Assignment Title"
              value={formData.title}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="course"
              placeholder="Course Name"
              value={formData.course}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Assignment
            </button>
          </form>
        </div>

        {/* Assignment Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Due Date</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((assignment) => (
                <tr
                  key={assignment.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{assignment.title}</td>
                  <td className="p-4">{assignment.course}</td>
                  <td className="p-4">{assignment.dueDate}</td>

                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        assignment.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        deleteAssignment(assignment.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {assignments.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No assignments created yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3">
            Assignment Summary
          </h2>

          <p className="text-gray-700">
            Total Assignments:
            <span className="font-bold ml-2">
              {assignments.length}
            </span>
          </p>

          <p className="text-gray-700 mt-2">
            Active Assignments:
            <span className="font-bold ml-2 text-green-600">
              {
                assignments.filter(
                  (assignment) => assignment.status === "Active"
                ).length
              }
            </span>
          </p>

          <p className="text-gray-700 mt-2">
            Draft Assignments:
            <span className="font-bold ml-2 text-yellow-600">
              {
                assignments.filter(
                  (assignment) => assignment.status === "Draft"
                ).length
              }
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
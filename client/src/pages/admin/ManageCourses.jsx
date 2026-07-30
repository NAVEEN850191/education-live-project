import { useState } from "react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Computer Science",
      code: "CS101",
      instructor: "Dr. Smith",
    },
    {
      id: 2,
      name: "Mathematics",
      code: "MTH201",
      instructor: "Prof. Johnson",
    },
    {
      id: 3,
      name: "Physics",
      code: "PHY301",
      instructor: "Dr. Brown",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    instructor: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addCourse = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.code.trim() ||
      !formData.instructor.trim()
    )
      return;

    const newCourse = {
      id: Date.now(),
      ...formData,
    };

    setCourses([...courses, newCourse]);

    setFormData({
      name: "",
      code: "",
      instructor: "",
    });
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Manage Courses
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Course</h2>

          <form
            onSubmit={addCourse}
            className="grid md:grid-cols-3 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Course Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="code"
              placeholder="Course Code"
              value={formData.code}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              value={formData.instructor}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="md:col-span-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Add Course
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Code</th>
                <th className="p-4 text-left">Instructor</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{course.name}</td>
                  <td className="p-4">{course.code}</td>
                  <td className="p-4">{course.instructor}</td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {courses.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500"
                  >
                    No courses available.
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

export default ManageCourses;
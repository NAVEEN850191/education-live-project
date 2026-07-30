import { useState } from "react";

const AttendanceManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", course: "Computer Science", status: "Present" },
    { id: 2, name: "Jane Smith", course: "Mathematics", status: "Absent" },
    { id: 3, name: "Michael Johnson", course: "Physics", status: "Present" },
    { id: 4, name: "Emily Davis", course: "Computer Science", status: "Present" },
    { id: 5, name: "David Wilson", course: "Mathematics", status: "Absent" },
  ]);

  const updateAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const handleSave = () => {
    console.log("Attendance Saved:", students);
    alert("Attendance saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Attendance Management
        </h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-500 text-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">Present</h2>
            <p className="text-3xl font-bold mt-2">{presentCount}</p>
          </div>

          <div className="bg-red-500 text-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold">Absent</h2>
            <p className="text-3xl font-bold mt-2">{absentCount}</p>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Student Name</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-center">Attendance</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.course}</td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() =>
                          updateAttendance(student.id, "Present")
                        }
                        className={`px-4 py-2 rounded-lg text-white ${
                          student.status === "Present"
                            ? "bg-green-600"
                            : "bg-green-400 hover:bg-green-500"
                        }`}
                      >
                        Present
                      </button>

                      <button
                        onClick={() =>
                          updateAttendance(student.id, "Absent")
                        }
                        className={`px-4 py-2 rounded-lg text-white ${
                          student.status === "Absent"
                            ? "bg-red-600"
                            : "bg-red-400 hover:bg-red-500"
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-6 text-gray-500"
                  >
                    No students available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Save Attendance
          </button>
        </div>

      </div>
    </div>
  );
};

export default AttendanceManagement;
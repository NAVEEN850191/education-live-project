const Reports = () => {
  const reportData = {
    totalStudents: 520,
    totalTeachers: 38,
    totalCourses: 18,
    attendanceRate: "92%",
  };

  const recentActivities = [
    {
      id: 1,
      activity: "New student registered",
      user: "John Doe",
      date: "30 Jul 2026",
    },
    {
      id: 2,
      activity: "Course added",
      user: "Admin",
      date: "29 Jul 2026",
    },
    {
      id: 3,
      activity: "Teacher assigned",
      user: "Sarah Johnson",
      date: "29 Jul 2026",
    },
    {
      id: 4,
      activity: "Attendance updated",
      user: "Prof. Smith",
      date: "28 Jul 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Reports & Analytics
        </h1>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500">Students</h3>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {reportData.totalStudents}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500">Teachers</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {reportData.totalTeachers}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500">Courses</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {reportData.totalCourses}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-gray-500">Attendance</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {reportData.attendanceRate}
            </p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              Recent Activities
            </h2>
          </div>

          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Activity</th>
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentActivities.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{item.activity}</td>
                  <td className="p-4">{item.user}</td>
                  <td className="p-4">{item.date}</td>
                </tr>
              ))}

              {recentActivities.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-6 text-gray-500"
                  >
                    No report data available.
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

export default Reports;
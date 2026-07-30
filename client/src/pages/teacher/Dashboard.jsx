import { BookOpen, Users, ClipboardList, FileText } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Courses",
      value: 5,
      icon: <BookOpen size={32} />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Students",
      value: 180,
      icon: <Users size={32} />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Assignments",
      value: 24,
      icon: <ClipboardList size={32} />,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Notes Uploaded",
      value: 38,
      icon: <FileText size={32} />,
      color: "bg-orange-500",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      activity: "Uploaded React Notes",
      time: "2 hours ago",
    },
    {
      id: 2,
      activity: "Created Java Assignment",
      time: "Yesterday",
    },
    {
      id: 3,
      activity: "Marked Attendance",
      time: "Yesterday",
    },
    {
      id: 4,
      activity: "Added New Course Material",
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Teacher Dashboard
        </h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-gray-500">{item.title}</h2>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </div>

              <div
                className={`${item.color} text-white p-4 rounded-full`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Recent Activities
          </h2>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {activity.activity}
                  </p>
                  <p className="text-sm text-gray-500">
                    {activity.time}
                  </p>
                </div>

                <span className="text-indigo-600 font-semibold">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition">
              Add Course
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition">
              Upload Notes
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition">
              Create Assignment
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition">
              Mark Attendance
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
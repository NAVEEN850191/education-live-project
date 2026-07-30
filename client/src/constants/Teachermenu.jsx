import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBook,
  FaClipboardCheck,
  FaTasks,
  FaUpload,
  FaUserCircle,
} from "react-icons/fa";

const teacherMenu = [
  {
    id: 1,
    name: "Dashboard",
    path: "/teacher/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    id: 2,
    name: "Students",
    path: "/teacher/students",
    icon: <FaUserGraduate />,
  },
  {
    id: 3,
    name: "Courses",
    path: "/teacher/courses",
    icon: <FaBook />,
  },
  {
    id: 4,
    name: "Attendance",
    path: "/teacher/attendance",
    icon: <FaClipboardCheck />,
  },
  {
    id: 5,
    name: "Assignments",
    path: "/teacher/assignments",
    icon: <FaTasks />,
  },
  {
    id: 6,
    name: "Upload Notes",
    path: "/teacher/upload-notes",
    icon: <FaUpload />,
  },
  {
    id: 7,
    name: "Profile",
    path: "/teacher/profile",
    icon: <FaUserCircle />,
  },
];

export default teacherMenu;
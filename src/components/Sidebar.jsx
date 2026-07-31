import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <ul>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

        <li>
          <Link to="/courses">
            Courses
          </Link>
        </li>

        <li>
          <Link to="/notes">
            Notes
          </Link>
        </li>

        <li>
          <Link to="/assignments">
            Assignments
          </Link>
        </li>

        <li>
          <Link to="/attendance">
            Attendance
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;
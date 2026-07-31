import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AssignmentCard from "../../components/AssignmentCard";
import "./Assignments.css";

function Assignments() {

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/assignments")
      .then((response) => response.json())
      .then((data) => {

        setAssignments(data.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <Layout>

      <h1 className="page-title">
        Assignments
      </h1>

      <div className="cards">

        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            title={assignment.title}
            subject={assignment.subject}
            dueDate={assignment.dueDate}
            totalMarks={assignment.totalMarks}
          />
        ))}

      </div>

    </Layout>
  );
}

export default Assignments;
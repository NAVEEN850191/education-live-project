import Layout from "../../components/Layout";
import CourseCard from "../../components/CourseCard";
import "./Courses.css";
import { useEffect, useState } from "react";

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/courses")
      .then((response) => response.json())
      .then((data) => {

        setCourses(data.data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (
    <Layout>

      <h1 className="page-title">
        Courses
      </h1>

      <div className="cards">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            courseName={course.courseName}
            courseCode={course.courseCode}
            teacher={course.teacher}
          />
        ))}

      </div>

    </Layout>
  )
}

export default Courses;
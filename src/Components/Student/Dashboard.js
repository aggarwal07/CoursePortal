import React from "react";
import courseModel from "../../raw_data";
import CourseSelected from "./CourseSelected";

const Dashboard = () => {
  const name = localStorage.getItem("userName");
  const roll = localStorage.getItem("userRoll");
  const SelectedCourse = localStorage.getItem("courseRegistered");

  const studentsByCourse = new Map();

  courseModel.forEach((course) => {
    const { name, students } = course;

    students.forEach((student) => {
      const { id, name: studentName, email } = student;

      if (studentsByCourse.has(name)) {
        studentsByCourse.get(name).push({ id, name: studentName, email });
      } else {
        studentsByCourse.set(name, [{ id, name: studentName, email }]);
      }
    });
  });

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold underline">Student Dashboard</h1>

      <div className="flex mt-5">
        <p className="text-2xl italic">Name : </p>
        <p className="ml-2 text-2xl">{name}</p>
      </div>
      <div className="flex mt-5">
        <p className="text-2xl italic">Roll Number : </p>
        <p className="ml-2 text-2xl">{roll}</p>
      </div>

      <p className="text-2xl italic mt-5">Courses Registered : </p>
      <CourseSelected l={SelectedCourse}/>

      <p className="text-2xl italic mt-5">Other Courses :</p>
      <div className="grid grid-cols-4 gap-28 mt-10">
        {Array.from(studentsByCourse.entries()).map(
          ([courseName, students]) => (
            <div key={courseName}>
              <h2 className="underline font-bold">{courseName}</h2>
              <ul>
                {students.map((student) => (
                  <li className="flex" key={student.id}>
                    {student.name} -{" "}
                    <p className="italic ml-1">{student.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Dashboard;

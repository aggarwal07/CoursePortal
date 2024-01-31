import React from "react";
import courseModel from "../../raw_data";
import CourseSelected from "./CourseSelected";

const Dashboard = () => {
  const name = localStorage.getItem("userName");
  const roll = localStorage.getItem("userRoll");
  const SelectedCourse = localStorage.getItem("courseRegistered");
  const selectedArray = JSON.parse(SelectedCourse);

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
      <h1 className="text-5xl font-bold underline mt-4">Student Dashboard</h1>
      <div className="border-4 w-[85vw] border-cyan-400 shadow-2xl flex flex-col items-center mt-10 rounded-xl ">


      <div className="flex mt-5">
        <p className="text-2xl italic font-bold underline">Name : </p>
        <p className="ml-2 text-2xl">{name}</p>
      </div>
      <div className="flex mt-5">
        <p className="text-2xl italic font-bold underline">Roll Number : </p>
        <p className="ml-2 text-2xl">{roll}</p>
      </div>

      <p className="text-2xl underline mt-5 font-bold">Courses Registered : </p>
      <div className="mb-8">

      <CourseSelected l={selectedArray}/>
      </div>
      </div>
      <div className="border-4 w-[85vw] border-cyan-400 shadow-2xl flex flex-col items-center mt-10 rounded-xl mb-24 ">

      <p className="text-2xl italic font-bold underline mt-5">Students Enrolled in Other Courses :</p>
      <div className="grid grid-cols-4 gap-28 mt-10 mb-10">
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
    </div>
  );
};

export default Dashboard;

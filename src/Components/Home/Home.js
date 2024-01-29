import React, { useState } from "react";
import courseModel from "../../raw_data";
import CoursePreview from "./CoursePreview";

const Home = () => {
  const [courseID, setcoursID] = useState(0);
  {
    localStorage.setItem("id", courseID);
  }

  return (
    <div className="mt-28 flex justify-between px-6">
      <div className="w-2/5">
        {courseModel.map((course) => (
          <div
            onClick={() => {
              setcoursID(course.id - 1);
            }}
            key={course.id}
            className={`flex w-full border ${
              course.id % 2 ? "bg-cyan-400" : "bg-white"
            } h-10 justify-between items-center p-5`}
          >
            <div className="flex">
              <input type="checkbox" className=""></input>
              <p className="ml-8">{course.name}</p>
            </div>

            <p>{course.enrollmentStatus}</p>
          </div>
        ))}
      </div>
      <CoursePreview id={courseID} />
    </div>
  );
};

export default Home;

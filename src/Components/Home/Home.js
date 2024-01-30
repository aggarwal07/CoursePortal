import React, { useState } from "react";
import { Link } from "react-router-dom";
import courseModel from "../../raw_data";
import CoursePreview from "./CoursePreview";
import CourseSelected from "../Student/CourseSelected";

const Home = () => {
  const [courseID, setcoursID] = useState(0);
  const [Selected, setSelected] = useState("No Courses Registered");
 
  {
    localStorage.setItem("id", courseID);
    localStorage.setItem("courseRegistered", Selected);
  }

  return (
    <div className="mt-28 flex justify-between px-6">
      <div className="w-1/2 h-[30vw] flex flex-col justify-between">
        <div className="w-3/4 h-[20vw] overflow-scroll">
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
                <button onClick={()=>{
                  if(Selected==="No Courses Registered")
                  setSelected(course.name)
                else
                setSelected(Selected + " , " + course.name)
                }} className="bg-green-500 text-sm w-6 h-6 mr-2">+</button>
                <button onClick={()=>{
                  const updatedString = Selected.replace(new RegExp(`\\b${course.name}\\b`, 'gi'), '');
                  const comma =" , ";
                  const updatedSelect = updatedString.replace(new RegExp(`\\b${comma}\\b`, 'gi'), '');
                  
                  setSelected(updatedSelect)
                }} className="bg-red-700 text-sm w-6 h-6">-</button>
                <p className="ml-8">{course.name}</p>
              </div>

              <p>{course.enrollmentStatus}</p>
            </div>
          ))}
        </div>
        <CourseSelected l={Selected} />
        <button className="bg-cyan-400 w-36 h-12 text-xl rounded-lg text-white "><Link to="/StudentDashboard">Register</Link></button>
      </div>
      <CoursePreview id={courseID} />
    </div>
  );
};

export default Home;

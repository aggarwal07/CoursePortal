import React from "react";
import courseModel from "../../raw_data";
import { Link } from "react-router-dom";

const CoursePreview = (props) => {
  return (
    <div className="flex flex-col justify-between w-1/2 border-2 p-6 border-cyan-400 shadow-2xl rounded-xl h-[60vh]">
      <div className="flex justify-between">
        <div>
          <p className="font-extrabold text-6xl w-1/2">
            {courseModel[props.id].name}
          </p>
          <p className="text-3xl mt-5 text-gray-500">
            {courseModel[props.id].instructor}
          </p>
        </div>
        <img src="/courseThumb.png" alt="Thumbnail" className="w-36 h-36"></img>
      </div>
      <div className="place-self-center">
        {courseModel[props.id].description}
      </div>
      <button className=" w-48 h-10 rounded-lg bg-blue-700 place-self-center text-white font-bold text-xl">
        <Link to="/CourseDetails">Go To Course</Link>
      </button>
    </div>
  );
};

export default CoursePreview;

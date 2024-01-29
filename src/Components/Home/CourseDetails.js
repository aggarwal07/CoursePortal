import React from "react";
import courseModel from "../../raw_data";
import ExpandableComponent from "./ExpandableComponent";

const CourseDetails = () => {
  const id = localStorage.getItem("id");
  return (
    <div className="flex flex-col w-full border-2 p-6 border-cyan-400 shadow-2xl rounded-xl h-full">
      <div className="flex justify-between">
        <div>
          <p className="font-extrabold text-6xl">{courseModel[id].name}</p>
          <p className="text-3xl mt-5 text-gray-500">
            {courseModel[id].instructor}
          </p>
        </div>
        <img src="/courseThumb.png" alt="Thumbnail" className="w-36 h-36"></img>
      </div>
      <div className="mt-10">
        <p className="text-xl font-bold flex">
          Schedule : <p className="text-gray-400 font-light ml-5">{courseModel[id].schedule}</p>
        </p>
        <p className="text-xl font-bold flex">
          Duration : <p className="text-gray-400 font-light ml-5">{courseModel[id].duration}</p>
        </p>
        <p className="text-xl font-bold flex">
          Location : <p className="text-gray-400 font-light ml-5">{courseModel[id].location}</p>
        </p>
      </div>
      <div className="place-self-center text-2xl font-gray-200 mt-10">
        {courseModel[id].description}
      </div>
      <div className="text-center place-self-center mt-10">
        <p className=" text-2xl font-bold uppercase">prerequisites</p>
        <p className="text-gray-400 text-xl">{courseModel[id].prerequisites}</p>
      </div>
      <div className=" place-self-center mt-10">
        <ExpandableComponent
          title="Syllabus"
          expandedContent={courseModel[id].syllabus.map((item)=>(<div key={item.week}>Week {item.week} : {item.topic} - {item.content}</div>))}
        />
      </div>
    </div>
  );
};

export default CourseDetails;

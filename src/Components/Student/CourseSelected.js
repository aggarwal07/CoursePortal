import React from "react";

const CourseSelected = (props) => {
  return (
    <div className="w-3/4  min-h-10 items-center p-6 border-b-4 shadow-xl border-cyan-400">
      <ul className="list-disc gap-1">
        {props.l.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSelected;

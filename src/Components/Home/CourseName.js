import React, { useState } from 'react';
import CourseDetails from './CourseDetails';

const CourseName = () => {
  const [courseDetails, setcourseDetails] = useState(false);

  const handleButtonClick = () => {
    courseDetails?setcourseDetails(false):setcourseDetails(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleButtonClick} className="bg-blue-500 text-white p-2 rounded">
        Start Rendering
      </button>

      {courseDetails && <CourseDetails />}
    </div>
  );
};

export default CourseName;
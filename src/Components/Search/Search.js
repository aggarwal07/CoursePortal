import React, { useState } from "react";
import courseModel from '../../raw_data';

import SearchResult from "./SearchResult";

const Search = () => {
    const [name, setName] = useState("");
  
  const [expand, setexpand] = useState(false);
    const student = courseModel
    .flatMap(course => course.students)
    .find(student => student.name === name);
    const enrolledCourses = courseModel.filter(course =>
        course.students.some(s => s.name === name)
      );
  
  return (<div>

    <div className="mt-2 flex">
      <input
        className="border p-2 w-60 h-8 text-lg rounded-lg font-semibold"
        placeholder="Search For Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <button onClick={()=>{setexpand(true)}} className="bg-blue-500 text-white  h-8 w-8 ml-2 rounded-md cursor-pointer">
        Go
      </button>
      </div>
      <SearchResult
            students={student}
            expand={expand}
            title={name}
            expandedContent={ <ul>
            {enrolledCourses.map(course => (
                <li key={course.id}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                
              </li>
            ))}
          </ul>}
        />
        </div>
  );
};

export default Search;

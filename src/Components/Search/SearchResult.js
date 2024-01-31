import React from 'react';


const SearchResult = ({ title, expandedContent,expand,students }) => {
    const isExpanded = expand;
    if (!students && isExpanded) {
        return <div className='absolute top-32'>
            <div className='text-center z-[1000] border-4 border-cyan-400 shadow-2xl p-4 bg-white'>
            No student found with the given name
            </div>
            </div>;
      }

  return (
    <div className='absolute top-32'>{isExpanded &&
        
    <div className='text-center z-[1000] border-4 border-cyan-400 shadow-2xl p-4 bg-white'>
      <div className=' underline text-3xl'>
        <h2>{title}</h2>
      </div>
      <div className='text-2xl mt-4'>{expandedContent}</div>
    </div>}
          </div>
  );
};

export default SearchResult;
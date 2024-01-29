import React, { useState } from 'react';

const ExpandableComponent = ({ title, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='text-center'>
      <div className=' underline text-3xl' onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <h2>{title}</h2>
      </div>
      {isExpanded && <div className='text-2xl mt-4'>{expandedContent}</div>}
    </div>
  );
};

export default ExpandableComponent;

import React from "react";

const Reset = () => {
  const handleReset = () => {
    window.location.reload(true);
  };

  return (
    <img
        width={30}
      src="/reset.png"
      className="cursor-pointer"
      onClick={handleReset}
    ></img>
  );
};

export default Reset;

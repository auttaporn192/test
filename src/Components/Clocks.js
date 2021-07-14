import React, { useState, useEffect } from "react";

const Clocks = () => {
  const [times, setTime] = useState(new Date());

  useEffect(() => {
    var timeID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timeID);
    };
  });

  return (
    <div>
      <h3>Time : {times.toLocaleTimeString()}</h3>
    </div>
  );
};

export default Clocks;

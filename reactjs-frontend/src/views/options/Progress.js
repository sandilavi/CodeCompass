import React, { useState } from 'react';

import './Progress.css';

const ProgressBar = ({ progress, label, maxValue = 100, color = '#007bff' }) => {
  const [percentage, setPercentage] = useState(progress * (100 / maxValue));

  // Optional function to update progress externally (if needed)
//   const updateProgress = (newProgress) => {
//     const updatedPercentage = Math.min(Math.max(0, newProgress * (100 / maxValue)), 100);
//     setPercentage(updatedPercentage);
//   };

  return (
    <div className="progress">
      <label>{label}</label>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;

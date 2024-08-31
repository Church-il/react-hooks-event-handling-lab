import React from 'react';
import './EyesOnMe.css'; 

function EyesOnMe() {
  // Handler for focus event
  const handleFocus = () => {
    console.log('Good!');
  };

  // Handler for blur event
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div id="eyes-on-me">
      <button
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;

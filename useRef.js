import React, { useRef } from 'react';

const MyComponent = () => {
  // Create a ref using useRef
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Access the current value of the ref
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default MyComponent;

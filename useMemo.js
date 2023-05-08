import React, { useMemo, useState } from 'react';

const MyComponent = () => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  // Use useMemo to calculate the result only when the dependencies change
  const result = useMemo(() => {
    console.log('Calculating result...');
    return valueA + valueB;
  }, [valueA, valueB]);

  return (
    <div>
      <input
        type="text"
        value={valueA}
        onChange={(e) => setValueA(e.target.value)}
      />
      <input
        type="text"
        value={valueB}
        onChange={(e) => setValueB(e.target.value)}
      />
      <p>Result: {result}</p>
    </div>
  );
};

export default MyComponent;

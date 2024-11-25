// CounterButton.js in your library
"use client";
import React, { useState } from 'react';

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default CounterButton;

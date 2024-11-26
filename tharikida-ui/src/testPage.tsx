// src/testPage.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Button type="primary">Click me</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import { useState } from 'react';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    // We will integrate the backend API here in Part 3
    const sum = Number(value1) + Number(value2);
    setResult(sum);
  };

  const handleSubtract = () => {
    // We will integrate the backend API here in Part 3
    const diff = Number(value1) - Number(value2);
    setResult(diff);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Arithmetic Calculator</h2>

      <div>
        <label>Value 1: </label>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Value 2: </label>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleAdd}>Add</button>
      {' '}
      <button onClick={handleSubtract}>Subtract</button>

      <hr />

      <h3>Result: {result !== null ? result : 'N/A'}</h3>
    </div>
  );
}

export default App;
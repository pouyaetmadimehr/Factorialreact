import React from 'react';

function App() {
  const factorial = (num) => {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

  return (
    <div>
      <h1>فاکتوریل عدد نوشته شده {factorial(5)}</h1>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import MainPage from './components/Wrap/MainPage';
import Content from './components/Wrap/Content';

function App() {
  const [out, setOut] = useState(0);

  console.log(out);
  return (
    <>
      {out == 0 && <MainPage out={() => setOut(1)} />}
      {out != 0 && <Content />}
    </>
  );
}

export default App;

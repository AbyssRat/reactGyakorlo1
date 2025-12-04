import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
{/*itt egy komment*/}

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
      <div className="App">
        <h1>ennyi másodperc telt el mióta ultoljára frissítetted az oldalt: {count}</h1>
      </div>

    </>
  )
}

export default App

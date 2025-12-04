import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
{/* // növelhető, csökkenthető
// Készíts egy számlálót, ami minden másodpercben növekszik
// Használj useEffect-et az időzítő beállításához és takarításához */}

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
        <h1>Számláló: {count}</h1>
      </div>

    </>
  )
}

export default App

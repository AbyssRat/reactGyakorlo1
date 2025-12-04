import './App.css';
import { useState, useEffect, use } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleClear = () => {
    setIsRunning(false);
    setCount(0);
  };
  useEffect(() => { 
    const savedInput = localStorage.getItem('inputValue');
    if (savedInput) {
      setInputValue(savedInput);
    }
  }
  , []);
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
 
    setLoading(true)
    setError(null)
 
    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
      .then((res) => {
        if (!res.ok) throw new Error('Hálózati hiba')
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
        }
      })
 
    return () => controller.abort();
  }, []); 
  return (
    <>
      <h1>számolj</h1>
     <div id='kezeloPanel'> 
      <p>{count}</p>
      <button className="start" onClick={handleStart}>hajrá</button>
        <button className="stop" onClick={handleStop}>na jó</button>
        <button className="clear" onClick={handleClear}>újra</button>
      </div>
      
      <h1>ide mehet</h1>
      <div id='imputPanel'>
        <input 
        type="text" 
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />

      </div>

      <h1>get it boy(fetch)</h1>
      <div id='apifetchPanel'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        )}


      </div>
    </>
  )
}

export default App
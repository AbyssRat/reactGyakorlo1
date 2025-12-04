import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
{/*itt egy komment*/}

function App() {

  const [count, setCount] = useState(0)

  const startTimer = () => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(setCount(0))
    document.querySelector('h1').innerText = 'Az időzítő leállt.'
    
    


  }

  const aktTimer = count



   


  return (
    <>
      <div className="App">
        <h1>számolgat: {count}</h1>
        <button onClick={startTimer}>indulj!!</button>
        <button onClick={stopTimer}>állj!!!!!!</button>
      </div>

      

    </>
  )
}

export default App

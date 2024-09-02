import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)



  let addValue = ()=>{
    console.log('add button clicked = ')
    setCount(count + 1)
    if (count < 20) {
      setCount(count + 1)
    } else {
      // Ensure that count doesn't exceed 5
      setCount(20)
    }
    
    

  }

  
  let subValue = ()=>{
    console.log('sub button clicked = ')
    setCount(count-1)
    // If the current count is greater than 0, decrease it by 1
    if (count > 0) {
      setCount(count - 1)
    } else {
      // Ensure that count doesn't go below 0
      setCount(0)
    }
  }


  return (
    <>
     <div>
    
      <h1>Count = {count}</h1>
      <button onClick={addValue}>+</button>
      <span>  </span>
      <button onClick={subValue}>-</button>
     </div>
    </>
  )
}

export default App

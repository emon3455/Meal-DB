import { useState } from 'react'
import './App.css'
import FoodContainer from './Components/FoodContainer/FoodContainer'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <FoodContainer></FoodContainer>
    </div>
  )
}

export default App

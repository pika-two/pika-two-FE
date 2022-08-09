import { useState } from 'react';
import './App.css';
import IntroPage from './page/UI/IntroPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <IntroPage/>
    </div>
  )
}



export default App

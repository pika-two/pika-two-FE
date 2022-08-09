import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dolguLogo from './assets/dolgu_logo.png'
import './App.css'
import styled from 'styled-components';
import Buttons from './stories/assets/Buttons';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="logo">
        <img src={dolguLogo} />
      </div><br/><br/>
      <div className="card">
        <Buttons onClick={() => setCount((count) => count + 1)}>
          시작하기
        </Buttons>
      </div>
    </div>
  )
}


// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Background = styled.div`
  background: #ffcc00;
`;
export default App

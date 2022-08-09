import styled from 'styled-components';
import { Routes,Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
  <>
  <Layout>
    <Routes>
      <Route path="/" element={<IntroPage/>}></Route>
      <Route path="/registerPage" element={<RegisterPage/>}></Route>
    </Routes>
  </Layout>
  
  </>
  )
}

export default App

const Layout = styled.div`
max-width: 100%;
width: 100%;
padding: 0;
margin: 0;
height: auto;
`

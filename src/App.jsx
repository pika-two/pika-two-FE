import styled from 'styled-components';
import { Routes,Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import RegisterPage from './pages/RegisterPage';
import AccountListPage from './pages/AccountListPage';
import { GlobalPortal } from './GlobalPortal';
import IncomeListPage from './pages/IncomeListPage';
import IncomeConnectPage from './pages/IncomeConnectPage';
import MainPage from './pages/MainPage'
function App() {
  return (
  <GlobalPortal.Provider>
  <Layout>
    <Routes>
      <Route path="/" element={<IntroPage/>}></Route>
      <Route path="/registerPage" element={<RegisterPage/>}></Route>
      <Route path="/accountList" element= {<AccountListPage/>}></Route>
      <Route path="/incomeList" element={<IncomeListPage/>}></Route>
      <Route path="/incomeConnect"  element={<IncomeConnectPage/>} ></Route>
      <Route path="/mainPage" element={<MainPage/>}></Route>
    </Routes>
  </Layout>
  
  </GlobalPortal.Provider>
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

import styled from 'styled-components';
import { Routes,Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import RegisterPage from './pages/RegisterPage';
import AccountListPage from './pages/AccountListPage';
import { GlobalPortal } from './GlobalPortal';
import IncomeListPage from './pages/IncomeListPage';
import IncomeConnectPage from './pages/IncomeConnectPage';
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage';
import CompanyInfoPage from './pages/CompanyInfoPage'
import MyPage from './pages/MyPage';
import ReviewPage from './pages/ReviewPage';
import BookmarkPage from './pages/BookmarkPage';
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
      <Route path="/search/:keyword" element = {<SearchPage/>}></Route>
      <Route path="/company/:id" element={<CompanyInfoPage/>}></Route>
      <Route path="/myPage" element={<MyPage/>}></Route>
      <Route path="/reviewPage" element={<ReviewPage/>}></Route>
      <Route path="/bookmark" element={<BookmarkPage/>}></Route>
      <Route path="/applyCompanyList" element={<ApplyCompanyListPage/>}></Route>
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

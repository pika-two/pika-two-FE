import { useState } from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
function App() {
  return (
  <>
  <Layout>
    {<div>안녕하세요</div>}
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
background-color : blue;
`

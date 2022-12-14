import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { worker } from './mocks/browser'
import { RecoilRoot } from "recoil";
import {SWRConfig} from 'swr'
// if (process.env.NODE_ENV === 'development') {
//   worker.start()
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
       <SWRConfig value={{revalidateOnMount: true,}}> 
        <App />
       </SWRConfig>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
)

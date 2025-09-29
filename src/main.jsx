import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import MyAppForFun from './MyAppForFun.jsx'
import FilterableProductTable from './FilterableProductTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyAppForFun />
    <FilterableProductTable />
  </StrictMode>,
)



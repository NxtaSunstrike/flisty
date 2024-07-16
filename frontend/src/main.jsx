import React, { createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './store/store.js'
import { BrowserRouter } from 'react-router-dom'
import PagBar from './templates/UI/PaginationBar/PagBar.jsx'
import NavBar from './templates/UI/NavBar/NavBar.jsx'

const store = new Store()

export const Context = createContext({
    store
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{store}}>
        <BrowserRouter>
            {/* {location.pathname !=='/me' && '/chat' ? <NavBar/> : <Outlet/>} */}
            <PagBar/>
            <App/>
        </BrowserRouter>
    </Context.Provider>
  
)

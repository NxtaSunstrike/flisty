import { useContext, useEffect, useState,} from 'react'

import { Context } from './main'
import { observer} from 'mobx-react-lite'
import {Route, Routes, BrowserRouter, Navigate, Outlet, useLocation} from 'react-router-dom'
import HomePage from './templates/pages/Home/HomePage'
import ChatPage from './templates/pages/Chat/ChatPage'
import Mepage from './templates/pages/Me/Mepage'
import PostsPage from './templates/pages/Posts/PostsPage'
import TeamsPage from './templates/pages/Teams/TeamsPage'


import WrapperAuth from './templates/Auth/WrapperAuth'

import PagBar from './templates/UI/PaginationBar/PagBar'
import NavBar from './templates/UI/NavBar/NavBar'


function App() {

  const {store} = useContext(Context)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('access')){
      store.checkAuth()
    }
  }, [])

  const location = useLocation()

  if (store.isAuth) {
    return (
        <>
          {location.pathname !== '/me' && location.pathname !== '/chat' ? <NavBar/> : <Outlet/>}
          <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/me' element={<Mepage/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
            <Route path='/posts' element={<PostsPage/>}/>
            <Route path='/teams' element={<TeamsPage/>}/>
            <Route path='*' element={<Navigate to='/home'/>}/>
          </Routes>
        </>
        
    )
  }

  if (!store.isLoading && !store.isAuth) {
    return (
      <>
       
          <Routes>
              <Route path='/login' element={<WrapperAuth/>}/>
          </Routes>
      </>
    )
  }
  
}

export default observer(App)

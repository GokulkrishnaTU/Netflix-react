import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Banner from './components/Banner'
import RowPost from './components/RowPost'
import {Actions,orginals} from "./urls"

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={orginals}title='Netflix Orginals'/> 
      <RowPost url={Actions}title='Actions' isSmall/> 
    </div>
  )
}

export default App

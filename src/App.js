import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Banner from './components/Banner'
import RowPost from './components/RowPost'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost/> 
    </div>
  )
}

export default App

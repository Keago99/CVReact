import { useState } from 'react'
import './App.css'
import General from './components/General'
import Educational from './components/Educational'
import Practical from './components/Practical'


function App() {

  return (
    <div className="mainDiv">
      <h1 className="mainHeading">CV Builder</h1>
      <General/>
      <Educational/>
      <Practical/>
      <div className="footer">
        <hr/>
        <p>Created by Keagan.T</p>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  const [disp,setDisp]=useState(false)
  return (
    <div>
      <Navbar setDisp={setDisp} disp={disp}/>
      <Body disp={disp}/>
      <Footer/>
    </div>
  )
}

export default App
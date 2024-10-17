import { useState } from 'react'
import './styles/App.css'
import { HeaderComponent } from './components/header/headerComponent'
import { FrameComponent } from './components/frame/frameComponent'

function App() {

  return (
    <>
    <div className='app'>
      <div className='container-app'>
        <div className='header'>
          <HeaderComponent/>
        </div>
        </div>
        <div className='container-body'>
          <div className='home'>
            <div className='frame'>
              <FrameComponent/>
            </div>
            <div className='intro'>
              <p className='texto-intro'>Hi, I'm Arthur, <span className='texto-intro-blue'>software engineer</span> and learning enthusiast.</p>
            </div>
          </div>
    
        </div>
      
    </div>
    </>
  )
}

export default App
import './styles/App.css'
import { HeaderComponent } from './components/header/headerComponent'
import Hero from './pages/Home/sections/Hero/Hero'

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
          <Hero/>
        </div>
      
    </div>
    </>
  )
}

export default App
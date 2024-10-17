import { HeaderComponent } from './components/header/headerComponent'
import Hero from './sections/Hero/Hero'
import './Home.css'


function Home() {

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

export default Home;
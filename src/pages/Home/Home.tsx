import { HeaderComponent } from './components/header/headerComponent'
import Hero from './sections/Hero/Hero'
import './Home.css'
import About from './sections/Aboutme/About';
import Techsnskills from './sections/Techsnskills/Techsnskills';
import Projetos from './sections/Projetos/Projetos';
import Contact from './sections/Contact/Contact';


function Home() {

  return (
    <>
    <div className='app'>
      
        <div className='header'>
          <HeaderComponent/>
        </div>
        
        <div className='container-body'>
          <Hero/>
          <About/>
          <Techsnskills/>
          <Projetos/>
          <Contact/>
        </div>
    </div>
    </>
  )
}

export default Home;
import './Hero.css';
import { FrameComponent } from './components/frame/frameComponent';


function Hero() {

  return (
    <>
    
      <section id="home" className="section home-section">
        <div className='frame'>
          <FrameComponent/>
        </div>
        <div className='intro'>
          <p className='texto-intro'>Hi, I'm Arthur, <span className='texto-intro-blue'>software engineer</span> and learning enthusiast.</p>
          </div>
        </section>
    </>
  )
}

export default Hero;
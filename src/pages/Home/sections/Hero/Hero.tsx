import './Hero.css';
import { FrameComponent } from './components/frame/frameComponent';


function Hero() {

  return (
    <>
    
          <div className='home'>
            <div className='frame'>
                <FrameComponent/>
            </div>
            <div className='intro'>
              <p className='texto-intro'>Hi, I'm Arthur, <span className='texto-intro-blue'>software engineer</span> and learning enthusiast.</p>
            </div>
          </div>
    </>
  )
}

export default Hero;
import './About.css';
import { BlocoComponent } from './blocos/blocoComponent';
//import fotolivro from '/e-book.png';
//import fotocerebro from '/cerebro.png';
//import fotocorrida from '/corrida.png';

//import fotolivro from 'C:\Users\arthu\Documents\PUCRS\GrupoDeEstudo\portfolio\src\assets\e-book.png';
//import fotocerebro from 'C:\Users\arthu\Documents\PUCRS\GrupoDeEstudo\portfolio\src\assets\cerebro.png';
//import fotocorrida from 'C:\Users\arthu\Documents\PUCRS\GrupoDeEstudo\portfolio\src\assets\corrida.png';
//<BlocoComponent icone={fotolivro} name={"My life journey"} text={"aaa"}/>
//<BlocoComponent icone={fotocerebro} name={"What motivates me"} text={"aaa"}/>
//<BlocoComponent icone={fotocorrida} name={"Beyond the code"} text={"aaa"}/>

const About = () => {
  return (
    <section id="about-me" className="section about-me-section">
      <div className='titulo-about'>
        <h1>About Me</h1>
      </div>
      <div className='blocos'>
      <BlocoComponent icone= 'public\assets\e-book.svg' name='My life journey' text="I was born in California, USA, in 2004. As the son of Brazilian parents, I moved to Brazil when I was 7 weeks old. I always dedicated myself to school, but I never stopped enjoying this important phase of my life. I greatly value the experiences that life gives me and I am very happy with my life and the friends I have."/>
      <BlocoComponent icone= 'public\assets\corrida.svg' name={"Beyond the code"} text="When I'm not developing, my main hobby is running. I'm a marathon runner. I completed this distance in September 2024 and the journey to this achievement taught me a lot, such as how, without discipline and consistency, it is very difficult for anything to work out. Besides that, I like to read, listen to music, play soccer and spend quality time with my friends."/>
      <BlocoComponent icone= 'public\assets\cerebro.svg' name={"What motivates me"} text="My motivation comes mainly from my family. From a very young age, I learned that education is the basis of everything and that, regardless of the area I chose for my future, studying would always be extremely important. Furthermore, I really want to work on projects that truly have a positive impact on people's lives."/>
      </div>
    </section>
  );
};

export default About;

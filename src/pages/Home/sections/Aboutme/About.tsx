import './About.css';
import fotolivro from '/e-book.png';
import fotocerebro from '/cerebro.png';
import fotocorrida from '/corrida.png';

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
      <BlocoComponent icone={fotolivro} name={"My life journey"} text={"aaa"}/>
      <BlocoComponent icone={fotocerebro} name={"What motivates me"} text={"aaa"}/>
      <BlocoComponent icone={fotocorrida} name={"Beyond the code"} text={"aaa"}/>
      </div>
    </section>
  );
};

export default About;

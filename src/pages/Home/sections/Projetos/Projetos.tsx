import { ProjectComponent } from './projectComponent/ProjectComponent';
import './Projetos.css';

const Projetos = () => {
  return (
    <section id="projects" className="section projetos-section">
      <div className='titulo-projects'>
        <h1>Projects</h1>
      </div>
      <div className='grid-projetos'>
        <ProjectComponent name='WEB CALCULATOR' link='https://github.com/ArthurBlasi/calculadora-web'/>
        <ProjectComponent name='WEATHER FORECAST APP' link='https://github.com/ArthurBlasi/weather-forecast-web'/>
        <ProjectComponent name='ROBOT RENTAL APP' link='https://github.com/ArthurBlasi/robot-rental-company-app'/>
        <ProjectComponent name='SABOR EXPRESS APP' link='https://github.com/ArthurBlasi/Sabor-Express'/>
      </div>
    </section>
  );
};

export default Projetos;

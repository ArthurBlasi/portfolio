import { ProjectComponent } from './projectComponent/ProjectComponent';
import './Projetos.css';

const Projetos = () => {
  return (
    <section id="projects" className="section projetos-section">
      <div className='titulo-projects'>
        <h1>Projects</h1>
      </div>
      <div className='grid-projetos'>
        <ProjectComponent name='PROJETO AB I' date='14/04/2022'/>
        <ProjectComponent name='PROJETO AB II' date='15/07/2022'/>
        <ProjectComponent name='PROJETO AB III' date='02/12/2022'/>
        <ProjectComponent name='PROJETO AB IV' date='coming soon...'/>
      </div>
    </section>
  );
};

export default Projetos;

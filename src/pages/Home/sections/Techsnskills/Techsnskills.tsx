import './Techsnskills.css';
import { TnsComponent } from './tnsComponent/tnsComponent';

const Techsnskills = () => {
  return (
    <section id="techs-skills" className="section techsnskills-section">
      <div className='titulo-tns'>
        <h1>Technologies and skills</h1>
      </div>
      <div className='content'>
        <div className='bloco-grid'>
          <TnsComponent icone='public\assets\java.png'/>
          <TnsComponent icone='public\assets\python.png'/>
          <TnsComponent icone='public\assets\react.png'/>
          <TnsComponent icone='public\assets\github.png'/>
          <TnsComponent icone='public\assets\typescript.png'/>
          <TnsComponent icone='public\assets\oracle.png'/>
          <TnsComponent icone='public\assets\sql-server.png'/>
          <TnsComponent icone='public\assets\java-script.png'/>
          <TnsComponent icone='public\assets\design.png'/>
          <TnsComponent icone='public\assets\mongodb.png'/>
          <TnsComponent icone='public\assets\teamwork.png'/>
          <TnsComponent icone='public\assets\figma.png'/>
        </div>
        <div className='grafico'>

        </div>
      </div>
    </section>
  );
};

export default Techsnskills;

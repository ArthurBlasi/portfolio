import './tnsComponent.css';

//<img src="" alt="" />

//export function TnsComponent({icone} : {icone : string}) {
    export function TnsComponent({icone} : {icone : string}) {

        return (
            <div className="bloco-tech-skill">
                <img className="logos" src={icone} alt="" />
            </div>
            
        );
    }
    
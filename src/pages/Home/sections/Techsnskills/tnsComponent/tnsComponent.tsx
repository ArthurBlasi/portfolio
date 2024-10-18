import './tnsComponent.css';

//<img src="" alt="" />

//export function TnsComponent({icone} : {icone : string}) {
    export function TnsComponent({icone} : {icone : string}) {

        return (
            <button className='botao-tns'>
                    <img className="logos" src={icone} alt="" />
            </button>
        );
    }
    
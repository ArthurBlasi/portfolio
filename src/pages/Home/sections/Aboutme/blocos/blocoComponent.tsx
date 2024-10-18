import "./blocoComponent.css";

//export function BlocoComponent({ icone, name, text }: { icone: string, name: string, text: string }) {
    export function BlocoComponent({ name, text }: { name: string, text: string }) {

    return (
        <div className="bloco-geral">
            <div className="icon">
                
            </div>
            <div className="nome">
                <h2>{name}</h2>
            </div>
            <div className="texto">
                {text}
            </div>
        </div>
        
    );
}

import "./projectComponent.css";

//<img src="" alt="" />

//export function BlocoComponent({icone}: {icone: string}) {
    export function ProjectComponent({name, link}: {name : string, link : string}) {

        const handleClick = () => {
            window.location.href = link;
          };

    return (
        <div className="frame-de-fora">
            <div className="frame-do-meio">
                <button className="botao-proj" onClick={handleClick}>
                    <h1>{name}</h1>
                </button>
            </div>
        </div>
    );
}

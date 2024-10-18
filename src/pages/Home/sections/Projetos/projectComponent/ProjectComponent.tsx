import "./projectComponent.css";

//<img src="" alt="" />

//export function BlocoComponent({icone}: {icone: string}) {
    export function ProjectComponent({name, date}: {name : string, date : string}) {

    return (
        <div className="frame-de-fora">
            <div className="frame-do-meio">
                <h1>{name}</h1>
                <p>{date}</p>
            </div>
        </div>
    );
}

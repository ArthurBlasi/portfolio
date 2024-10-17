import "./headerComponent.css";
import HeaderButton from "./components/headerButton";


export function HeaderComponent() {

    const goHome = () => {
        console.log("Navigating to home...");
        
    };

    const goAboutMe = () => {
        console.log("Navigating to about me...");
        
    };

    const goTechsNSkills = () => {
        console.log("Navigating to technologies and skills...");
        
    };

    const goProjects = () => {
        console.log("Navigating to projects...");
        
    };

    const goContact = () => {
        console.log("Navigating to contact...");
        
    };


    return (
        <header className="header">
            <div className="buttons">
                <HeaderButton name="home" onclick={goHome}/>
                <HeaderButton name="about me" onclick={goAboutMe}/>
                <HeaderButton name="techs and skills" onclick={goTechsNSkills}/>
                <HeaderButton name="projects" onclick={goProjects}/>    
                <HeaderButton name="contact" onclick={goContact}/>
            </div>


        </header>

    );

}
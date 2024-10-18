import "./headerComponent.css";
import HeaderButton from "./components/headerButton";


export function HeaderComponent() {

    const goHome = () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    };

    const goAboutMe = () => {
        document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
    };

    const goTechsNSkills = () => {
        document.getElementById("techs-skills")?.scrollIntoView({ behavior: "smooth" });
    };

    const goProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const goContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
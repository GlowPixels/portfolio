import { useParams } from "react-router-dom";
import BtnGitHub from "../Components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectList";



const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    console.log(project);

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    {project.gitHubLink &&
                     (<BtnGitHub link="https://gitHub.com" />)
                    }

                    

                </div>
            </div>
        </main>
     );
}
 
export default Project;
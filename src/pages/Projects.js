import Project from '../Components/project/Project';
import project02 from './../styles/img/projects/02.jpg';
import project03 from './../styles/img/projects/03.jpg';
import project04 from './../styles/img/projects/04.jpg';
import project05 from './../styles/img/projects/05.jpg';
import project06 from './../styles/img/projects/06.jpg';  
   
const Projects = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                 <Project />  

                </ul>
            </div>
    </main>
     );
   }
    
export default Projects; 
    

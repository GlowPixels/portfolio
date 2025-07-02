import "./style.css"
import gitHub from "./gitHub-black.svg"

const BtnGitHub = () => {
    return ( 
        <a href="#!" className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
        </a>
     );
}
 
export default BtnGitHub;
// import ShowcaseBackgroundImg from './../assets/imgs/backgrounds/showcaseBackgroundImg.png';
import dumbyImg from './../assets/imgs/showcase/dumby-img.jpg';

//todo convert all project data to project.json and pass as a prop



//todo Link error is here --->
export default function ProjectContainer() {
    
    const project = {
        name: "Project Name",
        image: dumbyImg.src,
        type: "website",
        tech: "HTML, CSS, JavaScript, etc",
        webAddress: "./projects/",
        github: "github link"
    };


    return (
      <a href={project.webAddress}>
        <div
          className="projectBoxShadow"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="projectBox">
            <div className="projectData">
              <div className="projectBasicData">
                <h2>{project.name}</h2>
                <span>{project.type}</span>
              </div>
              <div className="projectTechData">
                <h4>Technologies</h4>
                <p className="techTypes">{project.tech}</p>
                <span className="gLink">
                  {/* <Link href={project.githubLink}>Github</Link> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
}
//GalleryProjectBox
import Link from "next/link";
// import ShowcaseBackgroundImg from "./../assets/imgs/backgrounds/showcaseBackgroundImg.png";
import dumbyImg from "./../imgs/showcase/dumby-img.jpg";
export default function GalleryProjectBox() {
        const project = {
          name: "Project Name",
          image: dumbyImg.src,
          type: "website",
          tech: "HTML, CSS, JavaScript, etc",
          webAddress: "./projects/",
          github: "github link",
        };
  return (
    <Link href={project.webAddress} passHref>
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
    </Link>
  );
}

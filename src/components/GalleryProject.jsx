import 'react';
import { Link } from "react-router-dom";

// import GoldFoil from "./../assets/imgs/showcase/gold-foil.png";

//todo HOVER COVER
//todo convert all project data to project.json and pass as a prop

//todo Link error is here --->
function GalleryProject(props) {
  // console.log(props.key);
  // const id = this.props.key;
  const image = props.image;
  const webAddress = props.webAddress;
  const name = props.name;
  const type = props.type;
  const tech = props.tech;
  const github = props.github;

// todo Replace dumbyImg with project thumb
  return (
    <div
      className="galleryProject"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link to={webAddress}>
        <div className="galleryProjectBox">
          <div className="projectOverlay">
            <div className="projectData">
              <div className="projectBasicData">
                <h2>{name}</h2>
                <h3>{type}</h3>
              </div>
              <div className="projectTechData">
                <h4>Technologies</h4>
                <p className="projectTechData">{tech}</p>
                <span className="gLink">
                  <Link href={github}>Github</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GalleryProject;
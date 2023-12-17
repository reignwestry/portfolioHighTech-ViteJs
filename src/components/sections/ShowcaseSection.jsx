import ShowcaseBackgroundImg from "./../../assets/imgs/backgrounds/showcaseBackgroundImg.png";

import ProjectContainer from "./../projectContainer";

// import dumbyImg from "./../../assets/imgs/showcase/dumby-img.jpg";

// const projects = {
//     name: "Project Name",
//     image: dumbyImg.src,
//     type: "website",
//     tech: "HTML, CSS, JavaScript, etc",
//     link: "/project/path"
// }

//todo finish mobile responsive
//todo convert projectRow to a map function
function ShowcaseSection() {
  return (
    <div
      className="showcaseSection"
      style={{
        backgroundImage: `url(${ShowcaseBackgroundImg})`,
      }}
    >
      <div className="sectionHeader">
        <h1>Showcase</h1>
      </div>
      <span>Here is a showcase of my best and latest projects</span>
      <div className="showcaseGallery">
        <div className="row">
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
        </div>
        <div className="row">
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;
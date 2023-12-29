import ShowcaseBackgroundImg from "./../../assets/imgs/backgrounds/showcaseBackgroundImg.png";
import GalleryProject from "./../../components/GalleryProject";
//note Gallery PROJECTS DATA ARRAY
import Projects from './../../data/projectDataArray';
import dumbyImg from './../../assets/imgs/showcase/dumby-img.jpg';

//todo SETUP PROJECT LINKS AND THUMBS


//todo finish mobile responsive
//todo convert projectRow to a map function
export default function GallerySection() {


  return (
    <div
      className="gallerySection"
      style={{
        backgroundImage: `url(${ShowcaseBackgroundImg})`,
      }}
    >
      <div className="sectionHeader"></div>
      {/* <span>Here is a showcase of my best and latest projects</span> */}
      <div className="galleryBlock">
        
        {Projects.map((Project) => {
          return (<GalleryProject key={Project.id} image={Project.image.value == true ? Project.image : dumbyImg} webAddress={Project.webAddress} name={Project.name} type={Project.type} tech={Project.tech} github={Project.github} />);
        })}

      </div>
    </div>
  );
}

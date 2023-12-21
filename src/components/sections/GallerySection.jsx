import ShowcaseBackgroundImg from "./../../assets/imgs/backgrounds/showcaseBackgroundImg.png";
import GalleryRow from './GalleryRow';

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
export default function GallerySection() {
  return (
    <div
      className="gallerySection"
      style={{
        backgroundImage: `url(${ShowcaseBackgroundImg})`,
      }}
    >
      <div className="sectionHeader">
        <h1>Gallery</h1>
      </div>
      {/* <span>Here is a showcase of my best and latest projects</span> */}
      <div className="showcaseGallery">
        <GalleryRow />
        <GalleryRow />
      </div>
    </div>
  );
}

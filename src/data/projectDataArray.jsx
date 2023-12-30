import ACME_thumb from "./../assets/imgs/project_thumbs/ACME_thumbnail.png";
import Tip_Calc_thumb from './../assets/imgs/project_thumbs/Tip_Calc_thumbnail.png'
import RECIPE_thumb from './../assets/imgs/project_thumbs/Sconce_thumb.png'
import AppTheme_thumb from './../assets/imgs/project_thumbs/AppTheme_thumb.png'
import Massage_Parlor_Thumb from './../assets/imgs/project_thumbs/MassageByTia_thumb.png'
import DayCare_thumb from './../assets/imgs/project_thumbs/DayCare_thumb.png'
import ONMIFOOD_thumb from './../assets/imgs/project_thumbs/OMNIFOOD_thumb.png'
//===============

//jsx array with key === (id)
const Projects = [
  {
    id: 1,
    name: "SOC Recipe",
    image: {RECIPE_thumb},
    type: "website",
    tech: "HTML, CSS, JavaScript, etc",
    link: `/project/path`,
    github: "GITHUB link",
  },
  {
    id: 2,
    name: "ACME",
    image: { ACME_thumb },
    type: "Website",
    tech: "PHP, HTML5, CSS3",
    link: "./../../projects/04-ACME-HTML5_Responsive_Layout_Website/index.html",
    github: "https://github.com/reignwestry/mobile-first-acme-photography",
  },
  {
    id: 3,
    name: "Tip Calculator",
    image: { Tip_Calc_thumb },
    type: "Website",
    tech: "HTML, CSS, Js",
    link: "./../../projects/09-GirlScoutForm/index.html",
    github: "https://github.com/reignwestry/JS-Tip-Calculator",
  },
  {
    id: 4,
    name: "AppTheme",
    image: {AppTheme_thumb},
    type: "Website",
    tech: "HTML, CSS, Js",
    link: "./../../projects/11-Project_Google_Home/index.html",
    github: "GITHUB link",
  },
  {
    id: 5,
    name: "Massage Parlor",
    image: {Massage_Parlor_Thumb},
    type: "react app",
    tech: "reactjs, jsx, scss, expressjs",
    link: "./../../projects/19-Expressjs-REMOTE-SERVER-TEMPLATE/index.js",
    github: "GITHUB link",
  },
  {
    id: 6,
    name: "OMNIFOOD",
    image: {ONMIFOOD_thumb},
    type: "Website",
    tech: "HTML, CSS, Js",
    link: "./../../projects/12-PROJECT-OMNIFOOD/index.html",
    github: "GITHUB link",
  },
  {
    id: 7,
    name: "SOC Scones",
    image: "./../../projects/15-shoutit/thumbnail.png",
    type: "Website",
    tech: "HTML, CSS",
    link: "./../../projects/16-SOC-Scones/index.html",
    github: "GITHUB link",
  },
  {
    id: 8,
    name: "Day Care Center",
    image: {DayCare_thumb},
    type: "Website",
    tech: "HTML, CSS, PHP",
    link: "/18-ParallaxDesign4rmScratch/index.html",
    github: "GITHUB link",
  },
  // {
  //   id: 7,
  //   name: "QUIZZER",
  //   image: "./../../projects/13-quizzer/thumbnail.png",
  //   type: "Website",
  //   tech: "HTML, CSS, PHP",
  //   link: "./../../projects/13-quizzer/index.php",
  //   github: "GITHUB link",
  // },
  // { //todo REPLACE DUPLICATE
  //   id: 8,
  //   name: "Vineyard Email",
  //   image: "./../../projects/14-Vineyard-Email/thumbnail.png",
  //   type: "Email",
  //   tech: "HTML, CSS, PHP",
  //   link: "./../../projects/14-Vineyard-Email/index.html",
  //   github: "GITHUB link",
  // },
  // { //todo EITHER UPDATE OR CONVERT
  //   id: 9,
  //   name: "Shout It",
  //   image: "./../../projects/15-shoutit/thumbnail.png",
  //   type: "Email",
  //   tech: "HTML, CSS, PHP",
  //   link: "./../../projects/15-shoutit/index.php",
  //   github: "GITHUB link",
  // },
  // { //todo CREATE THE PROJECT OR etc.
  //   id: 11,
  //   name: "Mad Hatter",
  //   image: "./../../projects/17-1MADHATTER-wordpress/thumbnail.png",
  //   type: "Website",
  //   tech: "HTML, CSS, PHP",
  //   link: "./../../projects/17-1MADHATTER-wordpress/index.php",
  //   github: "GITHUB link",
  // },
  // {
  //   id: 13,
  //   name: "Vape Store",
  //   image: "no image",
  //   type: "react app",
  //   tech: "reactjs, jsx, scss, expressjs",
  //   link: "./../../projects/19-Expressjs-REMOTE-SERVER-TEMPLATE/index.js",
  //   github: "GITHUB link",
  // },
];

export default Projects;

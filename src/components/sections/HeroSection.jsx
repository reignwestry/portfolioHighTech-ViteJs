import Header from './../Header';
import HeroBackground from "./../../assets/imgs/backgrounds/heroBackgroundImage.png";

export default function HeroSection() {
  return (
    <div
      className="heroSection"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <Header />

      <div className="heroMessageBox">
        <p>
          Hi, I am <span className="keywordOne">Reign</span>,<br />
          <span className="keywordTwo">Full-Stack</span> Developer
        </p>

        <a href="/contact" >
          <button className="contactBtn" type="button">
            <div>
              <div className="contactBtnText">Contact Me Now</div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

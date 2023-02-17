import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";

const svgList = [
  { Icon: Twitter },
  { Icon: Facebook },
  { Icon: Instagram },
  { Icon: Linkedin },
  { Icon: Youtube },
];

const SocialNav = (props) => {
  return (
    <nav className={`socialMedia-nav ${props.className}`}>
      <ul className="socialMedia-nav__list">
        {svgList.map(({ Icon }, index) => (
          <li key={index}>
            <a href="/" className="socialMedia-nav__link">
              <Icon className="socialMedia-nav__icon" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialNav;

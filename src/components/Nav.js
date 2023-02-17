import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const Nav = ({ navigationLinkNames, classes, buttonText, buttonClass }) => {
  return (
    <nav className={classes}>
      <ul className={`${classes}__list`}>
        {navigationLinkNames.map(({ link, title }, index) => (
          <li className={`${classes}__listItem`} key={index}>
            <Link to={`/${link}`} className={`${classes}__link`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Button className={buttonClass}>{buttonText}</Button>
    </nav>
  );
};

export default Nav;

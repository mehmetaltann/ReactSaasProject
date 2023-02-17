/* eslint-disable jsx-a11y/anchor-is-valid */
import SocialNav from "./SocialNav";

const FooterLinks = ({ linksData }) => {
  return (
    <div className="footer__links">
      {linksData.map(({ header, list }, index) => (
        <div className="footer__container" key={index}>
          <h4 className="footer__header">
            {header}
            <span className="footer__underline"></span>
          </h4>
          <ul className="footer__list">
            {list.map((icerik, index) => (
              <li className="footer__item" key={index}>
                <a className="footer__link" href="#!">
                  {icerik}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer__container">
        <h4 className="footer__header">
          Bize Ulaşın
          <span className="footer__underline"></span>
        </h4>
        <SocialNav className="socialMedia-nav--big" />
      </div>
    </div>
  );
};

export default FooterLinks;

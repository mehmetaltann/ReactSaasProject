import Contact from "../components/Contact";
import FooterLinks from "../components/FooterLinks";
import { footerContactData as contactData } from "../Data";
import { footerLinksData as linksData } from "../Data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__contact">
          <Contact contactData={contactData} />
        </div>
        <FooterLinks linksData={linksData} />
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          Copyright &copy; 2023 &nbsp; Tüm Hakları Saklıdır
        </p>
      </div>
    </footer>
  );
};

export default Footer;

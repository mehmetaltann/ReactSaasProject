import logo from "../assets/images/logo.png";
import Navigation from "../components/Navigation";
import SocialNav from "../components/SocialNav";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <Navigation />
      <div className="header__socialMedia-nav">
        <SocialNav />
      </div>
    </header>
  );
};

export default Header;

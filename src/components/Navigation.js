import Nav from "./Nav";
import { navigationLinkNames } from "../Data";
import { useState } from "react";

const Navigation = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event){
    setIsChecked(!isChecked); 
  }

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navigation__checkbox"
        value={isChecked}
        onChange={handleChange}
      />
      <label htmlFor="navigation__checkbox" className="navigation__button">
        <span className="navigation__line"></span>
      </label>
      <Nav
        navigationLinkNames={navigationLinkNames}
        classes={"nav-top"}
        buttonText="GİRİŞ"
        buttonClass=""
      />
      {isChecked && <Nav
        navigationLinkNames={navigationLinkNames}
        classes={"nav-bottom"}
        buttonText="GİRİŞ"
        buttonClass="button--middle"
      />}
    </div>
  );
};

export default Navigation;

import Contact from "../components/Contact";
import { footerContactData as contactData } from "../Data";
import ContactForm from "../components/ContactForm";

const Iletisim = () => {
  return (
    <div className="container-contact">
      <div className="contactus">
        <div className="contactus__left">
          <ContactForm />
        </div>
        <div className="contactus__right">
          <Contact
            contactData={contactData}
            className2={"contact-info__list--dikey"}
          />
        </div>
      </div>
    </div>
  );
};

export default Iletisim;

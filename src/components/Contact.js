import ContactItem from "./ContactItem";

const Contact = (props) => {
  return (
    <div className="contact-info">
      <ul className={`contact-info__list ${props.className2}`}>
        {props.contactData.map(({ Icon, info }, index) => (
          <ContactItem info={info} key={index}>
            <Icon className="contact-info__icon" />
          </ContactItem>
        ))}
      </ul>
    </div>
  );
};

export default Contact;

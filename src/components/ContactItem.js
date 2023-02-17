const ContactItem = (props) => {
  return (
    <li className="contact-info__item">
      {props.children}

      <span>{props.info}</span>
    </li>
  );
};

export default ContactItem;

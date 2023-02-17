import Button from "./UI/Button";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <h1 className="contact-form__heading">Bize Ulaşın</h1>
      <input
        className="contact-form__input"
        type="text"
        placeholder="Adınız ve Soyadınız"
        required
      />
      <input
        className="contact-form__input"
        type="email"
        placeholder="E-Mail Adresiniz"
      />
      <input
        className="contact-form__input"
        type="tel"
        placeholder="Telefon Numaranız"
      />
      <textarea
        className="contact-form__message"
        name="message"
        id="message"
        rows="7"
        cols="30"
        placeholder="Mesajınız"
      ></textarea>
      <Button className="button--middle">Gönder</Button>
    </form>
  );
};

export default ContactForm;

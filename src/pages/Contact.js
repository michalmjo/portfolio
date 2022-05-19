import "../styles/Contact.scss";

const contactInfo = [
  {
    name: "linkedIn",
    class: "socials-linked",
    link: "https://www.linkedin.com/in/micha%C5%82-o%C5%BC%C3%B3g-743298151/",
  },
  {
    name: "github",
    class: "socials-github",
    link: "https://github.com/michalmjo?tab=repositories",
  },
  {
    name: "youtube",
    class: "socials-youtube",
    link: "https://www.youtube.com/channel/UCh_n6LL8LUgCuhMD3hC3RSQ",
  },
];

const Contact = () => {
  const socialLinks = contactInfo.map((social) => {
    return (
      <li key={social.name}>
        <a className={social.class} target={`_blank`} href={social.link}>
          {social.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <div className="contact__main">
        <div className="contact__main--wrapper">
          <div className="email">
            <p className="email-small">Drop me a message to</p>
            <p className="email-xl">
              Having a great idea to share ?
              <span>
                or want to have a cup of coffe and chit chat, just drop me a
                message.
              </span>
            </p>
            <p>email:</p>
            <a
              className="email__link"
              href="mailto:michal.pbe@gmail.com"
              target={`_blank`}
            >
              michal.pbe@gmail.com
            </a>
          </div>
          <div className="socials">
            <p>or follow me on:</p>
            <ul>{socialLinks}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

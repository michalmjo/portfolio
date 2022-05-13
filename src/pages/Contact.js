import "../styles/Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact__main">
        <div className="contact__main--wrapper">
          <div className="email">
            <p className="email-small">drop me a message to</p>
            <p className="email-xl">
              having a great idea to share ?
              <span>
                or want to have a cup of coffe and chit chat, just drop me a
                message.
              </span>
            </p>
            <p>email</p>

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
            <ul>
              <li>
                <a
                  className="socials-linked"
                  target={`_blank`}
                  href="https://www.linkedin.com/in/micha%C5%82-o%C5%BC%C3%B3g-743298151/"
                >
                  linkedIn
                </a>
              </li>
              <li>
                <a
                  className="socials-github"
                  target={`_blank`}
                  href="https://github.com/michalmjo?tab=repositories"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  className="socials-youtube"
                  target={`_blank`}
                  href="https://www.youtube.com/channel/UCh_n6LL8LUgCuhMD3hC3RSQ"
                >
                  youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

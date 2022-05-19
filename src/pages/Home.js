import "../styles/Home.scss";

const Header = () => {
  const headerText = `Hi,= I'm-Michał,= a-guy-who-loves-designing.`;

  const allLetters = headerText.split("");

  const handleBouncing = (e) => {
    e.currentTarget.classList.add("bounce");
  };

  const handleDeleteBouncing = (e) => {
    e.currentTarget.classList.remove("bounce");
  };

  const letters = allLetters.map((letter, id) => {
    if (letter === "=") {
      return <br key={id}></br>;
    } else if (letter === "-") {
      return ` `;
    }
    return (
      <span
        className="main-title"
        key={id}
        onMouseEnter={handleBouncing}
        onMouseLeave={handleDeleteBouncing}
      >
        {letter}
      </span>
    );
  });

  return (
    <>
      <div className="header__cointainer">
        <div className="someTags">
          <div>
            <span className="tag up-tag">
              {`<html>`}
              <br />
            </span>
          </div>
          <div>
            <span className="tag down-tag">
              <br />
              {`<html>`}
            </span>
          </div>
        </div>
        <h1 className="header__cointainer--title">{letters}</h1>
        <p className="header__cointainer--tag">Frontend Developer</p>
      </div>
    </>
  );
};

export default Header;

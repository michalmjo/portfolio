import "../styles/Home.scss";

const Header = () => {
  const text = `Hi,= I'm-Michał,= a-guy-who-loves-designing.`;

  const allLetters = text.split("");

  console.log(allLetters);
  const letters = allLetters.map((element, id) => {
    if (element === "=") {
      return <br key={id}></br>;
    } else if (element === "-") {
      return ` `;
    }
    return (
      <span
        className="main-title"
        key={id}
        onMouseEnter={handleBouncing}
        onMouseLeave={handleDeleteBouncing}
      >
        {element}
      </span>
    );
  });

  function handleBouncing(e) {
    console.log(e.currentTarget);
    e.currentTarget.classList.add("bounce");
  }

  function handleDeleteBouncing(e) {
    e.currentTarget.classList.remove("bounce");
  }
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

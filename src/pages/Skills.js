import "../styles/Skills.scss";

const skillsTab = [
  { id: 1, name: "html", class: "show_html" },
  { id: 2, name: "css", class: "show_css" },
  { id: 3, name: "js", class: "show_js" },
  { id: 4, name: "react", class: "show_react" },
];

const Skills = () => {
  const handleShowText = (e) => {
    const data = e.currentTarget.getAttribute("data");

    const cursor = document.querySelector(".cursor");

    if (data === "html") {
      cursor.classList.add("show_html");
    } else if (data === "css") {
      console.log("text skills");
      cursor.classList.add("show_css");
    } else if (data === "js") {
      console.log("js");
      cursor.classList.add("show_js");
    } else if (data === "react") {
      console.log("reactt");
      cursor.classList.add("show_react");
    }
  };

  const handleLeaveText = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("show_html");
    cursor.classList.remove("show_css");
    cursor.classList.remove("show_js");
    cursor.classList.remove("show_react");
  };

  const skillsItem = skillsTab.map((item) => (
    <div
      key={item.id}
      className={item.class}
      data={item.name}
      onMouseEnter={handleShowText}
      onMouseLeave={handleLeaveText}
    >
      <p>{item.name}</p>
    </div>
  ));

  return (
    <>
      <div className="skill__wrapper">
        <div className="skill__wrapper-text">
          <h2>Skills & Experience</h2>
          <p>
            Since I remember I am a self-taught teacher, I learn by trial and
            error.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps{" "}
          </p>
          <p>
            Visit my{" "}
            <a
              className="linkedIn"
              target={`_blank`}
              href="https://www.linkedin.com/in/micha%C5%82-o%C5%BC%C3%B3g-743298151/"
            >
              LinkedIn
            </a>{" "}
            profile for more details or just contact me.
          </p>
        </div>
        <div className="skill__wrapper-skill">
          {skillsItem}
          <div className="skill__wrapper-xl">
            <div>
              <p>
                Also check my{" "}
                <span className="btn_git">
                  <a
                    href="https://github.com/michalmjo?tab=repositories"
                    target={`_blank`}
                  >
                    Github
                  </a>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

import "../styles/Skills.scss";

const skillsTab = [
  { id: 1, name: "HTML", class: "show_html" },
  { id: 2, name: "CSS (SASS)", class: "show_css" },
  { id: 3, name: "JavaScript", class: "show_js" },
  { id: 4, name: "React, Redux,  Router", class: "show_react" },
];

const Skills = () => {
  const handleShowText = (e) => {
    const data = e.currentTarget.getAttribute("data");

    const cursor = document.querySelector(".cursor");

    if (data === "HTML") {
      cursor.classList.add("show_html");
    } else if (data === "CSS") {
      cursor.classList.add("show_css");
    } else if (data === "JavaScript") {
      cursor.classList.add("show_js");
    } else if (data === "react") {
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

  const skillsItem = skillsTab.map((skill) => (
    <div
      key={skill.id}
      className={skill.class}
      data={skill.name}
      onMouseEnter={handleShowText}
      onMouseLeave={handleLeaveText}
    >
      <p>{skill.name}</p>
    </div>
  ));

  return (
    <>
      <div className="skill__wrapper">
        <div className="skill__wrapper-text">
          <h2>Skills & Experience</h2>
          <p>
            Since I've remembered I am a self-taught, I have been learning by
            trial and error
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            frontend development, HTML, CSS, JS, building small and medium web
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

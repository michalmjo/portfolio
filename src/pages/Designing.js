import { useEffect, useState } from "react";
import "../styles/Designing.scss";
import useWindowDimensions from "../Elements/getWindowDimensions";

import workGuy from "../images/workGuy.png";
import workSpace from "../images/workSpace.png";
import memory from "../images/logoGame.png";
import toDoList from "../images/ToDoList.jpg";
import weatherApp from "../images/weatherApp.jpg";
import oneHandBandit from "../images/oneHandBandit.jpg";
import crypto from "../images/crypto.jpg";
import { show, reveal } from "../js/main";
import { images } from "../Elements/images";

const imagesTable = Object.values(images);

const project = [
  {
    id: 1,
    tag: "toDo",
    name: "ToDoList",
    url: `https://michalmjo.github.io/toDo-app-react/`,
  },
  {
    id: 2,
    tag: "memory",
    name: "Memory Game",
    url: `https://michalmjo.github.io/Memory-card-game/`,
  },
  {
    id: 3,
    tag: "weather",
    name: "Weather App",
    url: `https://michalmjo.github.io/weather-app/`,
  },
  {
    id: 4,
    tag: "bandit",
    name: "One Hand Bandit",
    url: `https://michalmjo.github.io/One-Hand-Bandit/`,
  },
  {
    id: 5,
    tag: "crypto",
    name: "Cryptocurrency",
    url: `https://michalmjo.github.io/cryptocurrency/`,
  },
];

const Designing = () => {
  const { width } = useWindowDimensions();

  const [pic, setPic] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleChangePhoto = (e) => {
    if (width >= 1023) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    const target = e.currentTarget.getAttribute("tag");

    if (target === "memory") {
      setPic(memory);
    } else if (target === "toDo") {
      setPic(toDoList);
    } else if (target === "weather") {
      setPic(weatherApp);
    } else if (target === "bandit") {
      setPic(oneHandBandit);
    } else if (target === "crypto") {
      setPic(crypto);
    }
  };

  const handleOutMouse = () => {
    setPic(null);
    setIsActive(false);
  };

  useEffect(() => {
    show();
    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const projectList = project.map((item) => {
    const animationStyle = {
      animation: `showContact .7s 0.${item.id}s ease both`,
    };
    return (
      <div key={item.id} className="project" style={animationStyle}>
        <div
          onMouseOver={handleChangePhoto}
          onMouseOut={handleOutMouse}
          tag={item.tag}
          className={`project-title ${item.tag}`}
        >
          <span>{`0${item.id}. `}</span>
          <a href={item.url} target={`_blank`}>
            <p>{item.name}</p>
          </a>
        </div>
      </div>
    );
  });

  const mini = imagesTable.map((element, index) => {
    return (
      <div key={index} className="miniProject-div">
        <a
          href="https://www.youtube.com/channel/UCh_n6LL8LUgCuhMD3hC3RSQ"
          style={{ cursor: "none" }}
        >
          <img
            src={element}
            alt={`Pic${index}`}
            aria-hidden="true"
            loading="lazy"
          />
        </a>
      </div>
    );
  });

  const work = (
    <div className="static">
      <img className="staticGuy" src={workGuy} alt="workGuy" />
      <img className="workSpace" src={workSpace} alt="workGuy" />
    </div>
  );

  return (
    <>
      <div className="scroll_down">
        scroll down<span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
      </div>
      {isActive ? null : work}
      <div className="wrapper__designing">
        <div className={`project-pic ${isActive ? `activePhoto` : null}`}>
          {isActive ? (
            <img
              className="projectImg"
              src={pic}
              alt="projectPicture"
              aria-hidden="true"
              loading="lazy"
            />
          ) : null}
        </div>

        {projectList}
        <div className="other_project">
          See my other{" "}
          <span style={{ color: "crimson", fontWeight: "bold" }}>mini</span>{" "}
          project
        </div>
        <div className="miniProject">{mini}</div>
        <footer>
          <p>
            <a
              href="https://www.youtube.com/channel/UCh_n6LL8LUgCuhMD3hC3RSQ"
              target={`_blank`}
            >
              See all my mini project
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Designing;

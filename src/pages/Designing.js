import { useEffect, useState } from "react";
import "../styles/Designing.scss";
import useWindowDimensions from "../Elements/getWindowDimensions";

import ScrollDown from "../Elements/ScrollDown";
import OtherProject from "../Elements/OtherProject";

import workGuy from "../images/workGuy.png";
import workSpace from "../images/workSpace.png";
import memory from "../images/logoGame.png";
import toDoList from "../images/ToDoList.jpg";
import weatherApp from "../images/weatherApp.jpg";
import oneHandBandit from "../images/oneHandBandit.jpg";
import crypto from "../images/crypto.jpg";
import movieApp from "../images/movieApp.jpg";
import { show, reveal } from "../js/main";

const project = [
  {
    id: 1,
    tag: "movieApp",
    name: "Movie App",
    url: `https://michalmjo.github.io/movie-app/`,
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
  {
    id: 6,
    tag: "toDo",
    name: "ToDoList",
    url: `https://michalmjo.github.io/toDo-app-react/`,
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
    const targetCurrentWorkList = e.currentTarget.getAttribute("tag");

    if (targetCurrentWorkList === "memory") {
      setPic(memory);
    } else if (targetCurrentWorkList === "toDo") {
      setPic(toDoList);
    } else if (targetCurrentWorkList === "weather") {
      setPic(weatherApp);
    } else if (targetCurrentWorkList === "bandit") {
      setPic(oneHandBandit);
    } else if (targetCurrentWorkList === "crypto") {
      setPic(crypto);
    } else if (targetCurrentWorkList === "movieApp") {
      setPic(movieApp);
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

  const work = (
    <div className="static">
      <img className="staticGuy" src={workGuy} alt="workGuy" />
      <img className="workSpace" src={workSpace} alt="workSpace" />
    </div>
  );

  return (
    <>
      <ScrollDown />
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
        <OtherProject />
      </div>
    </>
  );
};

export default Designing;

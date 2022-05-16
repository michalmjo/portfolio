import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "./getWindowDimensions";
import "../styles/_MouseElement.scss";

const MouseElement = () => {
  const { width } = useWindowDimensions();
  const location = useLocation();
  console.log(location.pathname);
  const page = location.pathname;
  if (
    page === "/contact" ||
    page === "/" ||
    (page === "/skills" && width >= 600) ||
    page === "*"
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  }

  useEffect(() => {
    let xp = 0;
    let yp = 0;
    const cursor = document.querySelector(".cursor");
    const follow = document.querySelector(".follow");

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      cursor.style.display = "none";
      follow.style.display = "none";
    } else {
      document.addEventListener("mousemove", mouseEffect);
    }

    function mouseEffect(e) {
      let positionX = e.pageX;
      let positionY = e.pageY;

      cursor.setAttribute("style", `top: ${e.pageY}px; left:${e.pageX}px;`);

      setTimeout(() => {
        xp = positionX;
        yp = positionY;

        follow.setAttribute("style", `top: ${yp}px; left: ${xp}px;`);
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="follow"></div>
    </>
  );
};

export default MouseElement;

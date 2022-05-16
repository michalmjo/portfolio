import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "./getWindowDimensions";
import "../styles/_MouseElement.scss";

const MouseElement = () => {
  const cursorRef = useRef();
  const followCursorRef = useRef();

  const { width } = useWindowDimensions();
  const location = useLocation();

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

    const cursor = cursorRef.current;
    const followCursor = followCursorRef.current;

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      cursor.style.display = "none";
      followCursor.style.display = "none";
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

        followCursor.setAttribute("style", `top: ${yp}px; left: ${xp}px;`);
      }, 100);
    }
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followCursorRef} className="follow"></div>
    </>
  );
};

export default MouseElement;

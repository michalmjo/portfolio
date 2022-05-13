import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./_MouseElement.scss";

const MouseElement = () => {
  const location = useLocation();
  console.log(location.pathname);
  if (
    location.pathname === "/contact" ||
    location.pathname === "/" ||
    location.pathname === "/skills" ||
    location.pathname === "*"
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
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

import { NavLink } from "react-router-dom";
import "../styles/Menu.scss";
import logo from "../images/Logo-mo.png";

const list = [
  { name: "say hi.", path: "/contact" },
  { name: "my skills", path: "/skills" },
  { name: "designing.", path: "/designing" },
];

const Menu = () => {
  const handleShowText = (e) => {
    const data = e.currentTarget.getAttribute("data");

    const cursor = document.querySelector(".cursor");

    if (data === "/contact") {
      cursor.classList.add("show_hi");
    } else if (data === "/skills") {
      console.log("text skills");
      cursor.classList.add("show_skill");
    } else if (data === "/designing") {
      console.log("desig");
      cursor.classList.add("show_design");
    }
  };

  const handleLeaveText = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("show_hi");
    cursor.classList.remove("show_skill");
    cursor.classList.remove("show_design");
  };

  const ulList = list.map((item) => {
    return (
      <li className="main__nav--item" key={item.name}>
        <NavLink
          onMouseEnter={handleShowText}
          onMouseLeave={handleLeaveText}
          data={item.path}
          name={item.name}
          to={item.path}
        >
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <menu>
        <ul className="main__nav">
          {" "}
          <li className="main__nav--item">
            <NavLink to="/">
              {" "}
              <img className="main__nav--logo" src={logo} alt="main-logo" />
            </NavLink>
          </li>
          {ulList}
        </ul>
      </menu>
    </>
  );
};
export default Menu;

import "../styles/Mountian.scss";
import bg from "../images/bg.png";
import whiteTree from "../images/whiteTree.png";
import frontTree from "../images/frontTree.png";
import mountian1 from "../images/mountian1.png";
import mountian2 from "../images/mountian2.png";

const Mountian = ({ direction }) => {
  const isActive = direction ? direction : "reset";
  return (
    <>
      <section className={`center_path`}>
        <div className={`center ${isActive} `}>
          <img src={bg} alt="bg" loading="lazy" aria-hidden="true" />
          <img
            className={`${isActive}`}
            src={whiteTree}
            alt="whiteTree"
            loading="lazy"
            aria-hidden="true"
          />
          <img
            className={`${isActive}`}
            src={frontTree}
            alt="frontTree"
            loading="lazy"
            aria-hidden="true"
          />
          <img
            className={`${isActive}`}
            src={mountian1}
            alt="mountian1"
            loading="lazy"
            aria-hidden="true"
          />
          <img
            className={`${isActive}`}
            src={mountian2}
            alt="mountian2"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </section>{" "}
    </>
  );
};

export default Mountian;

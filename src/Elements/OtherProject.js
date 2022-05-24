import { images } from "../Elements/images";
const imagesTable = Object.values(images);

const OtherProject = () => {
  const mini = imagesTable.map((element, index) => {
    return (
      <div key={index} className="miniProject-div">
        <a
          target={"_blank"}
          rel="noreferrer"
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
  return (
    <>
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
    </>
  );
};

export default OtherProject;

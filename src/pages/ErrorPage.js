import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.scss";

const ErrorPage = () => {
  const navigation = useNavigate();

  document.body.style.overflow = "hidden";
  return (
    <>
      <div className="contener">
        <div className="error">
          <p>Error</p>
        </div>
        <div className="number">
          <p>404</p>
        </div>
        <div className="text">
          <p>
            Looks like you got lost... Or we trying to confuse you... <br /> Let
            us bring you at <br />{" "}
            <span className="btn_home" onClick={() => navigation("/")}>
              HOME
            </span>
          </p>
        </div>
        <div className="animation">
          <div className="person"></div>
          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

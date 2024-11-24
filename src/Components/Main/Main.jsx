import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__text-container">
        <h1 className="main__text">Find Your Dream Home in Viriginia</h1>
        <p className="main__subtext">
          Discover perfect properties tailored to your lifestyle.
        </p>
      </div>
      <div className="main__photo-container">
        <div className="main__background-photo"></div>
      </div>
    </div>
  );
}

export default Main;

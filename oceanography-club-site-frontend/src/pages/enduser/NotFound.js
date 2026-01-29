import NotFoundAnimation from "../../utils/animation/NotFoundAnimation";
import UseTitleName from "../../utils/UseTitleName";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  UseTitleName("Page Not Found");

  const navigate = useNavigate();

  return (
    <div
      className="container d-flex justify-content-center align-items-center min-vh-100"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="p-0 d-flex justify-content-center col-lg-8">
          <NotFoundAnimation />
        </div>

        <div className="p-0 col-lg-4 mt-2 mt-lg-0">
          <div className="mx-4">
            <h1 className="mb-0">Stranded at Sea</h1>
            <div className="divider pt-1 bg-white rounded"></div>
          </div>
          <div className="mt-3">
            <h4 className="mx-4">
              You’ve washed up where no page exists, just endless water and
              circling fins. This island won’t save you… but the right course
              will.
            </h4>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-light btn-lg mt-2 fw-bold"
                onClick={() => navigate("/")}
              >
                Navigate Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

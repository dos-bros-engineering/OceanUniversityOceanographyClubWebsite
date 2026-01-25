// This is the end user header area 
import logo from "../../assets/logo.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router-dom";
import Search from "../search/EndUserSearch";
import { useData } from "../../utils/DataContext";

const EndUserHeader = () => {
  const location = useLocation();
  const { category } = useData();

  return (
    <div className="header">
      <Navbar expand="lg" className="custom-navbar shadow-lg py-1 px-lg-5">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} className="navbar-App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="nav-toggle">
            <i className="bi bi-list fs-1 nav-toggle-icon"></i>
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="my-2 my-lg-0 custom-nav mx-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={`ms-lg-5 ${location.pathname === "/" ? "active" : ""}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/news"
                className={`mx-lg-5 ${
                  location.pathname.startsWith("/news/") ? "active" : ""
                }`}
              >
                News
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    Article <i className="bi bi-caret-down-fill fs-6"></i>
                  </span>
                }
                id="navbarScrollingDropdown"
                className={`me-lg-5 caret-down ${
                  location.pathname.startsWith("/article/") ? "active" : ""
                }`}
              >
                {category?.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5).map((c, index) => (
                  <div key={index}>
                    {index !== 0 && (<NavDropdown.Divider className="d-none d-lg-block" />)}
                    <NavDropdown.Item
                      as={NavLink}
                      to={`/article/${c.name.toLowerCase().trim().replace(/\s+/g, "-")}`}
                    >
                      {c.name}
                    </NavDropdown.Item>
                  </div>
                ))}
                {category?.length > 5 && (
                  <>
                    <NavDropdown.Divider className="d-none d-lg-block" />
                    <NavDropdown.Item
                      as={NavLink}
                      to={`/article/all`}
                    >
                      More
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>

            {/* Search Function */}
            <div className="mb-2 mb-lg-0">
              <Search />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default EndUserHeader;

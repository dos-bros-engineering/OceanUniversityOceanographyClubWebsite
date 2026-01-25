// This is the both admin and super admin search component 
// This search component updates results as you type (no need to press Enter)
import Form from "react-bootstrap/Form";
import "./Search.css";

const AdminSearch = ({ searchTerm, setSearchTerm, styleType }) => {
  return (
    <div className={styleType}>
      <div className="d-flex position-relative">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="me-2 search-input pe-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="bi bi-search search-icon pe-2"></i>
      </div>
    </div>
  );
};

export default AdminSearch;

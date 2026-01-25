import { Outlet } from "react-router-dom";
import Footer from "../components/footer/EndUserFooter";
import Header from "../components/header/EndUserHeader";
import "./Layout.css";
import LoaderAnimation from "../utils/animation/LoaderAnimation"
import ErrorAnimation from "../utils/animation/ErrorAnimation";
import { useData } from "../utils/DataContext";

const EndUserLayout = () => {
  const { isPendingSuperAdmin, isPendingAdmin, isPendingArticles, isPendingNews, isPendingComments, isPendingCategory, errorSuperAdmin, errorAdmin, errorArticles, errorNews, errorComments, errorCategory } = useData();

  return (
    <div className="Enduser-App">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* The animation shown after an error occurs */}
      {(errorSuperAdmin || errorAdmin || errorArticles || errorNews || errorComments || errorCategory) && (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <ErrorAnimation />
          <h4>Something went wrong!</h4>
        </div>
      )}

      {/* The animation shown before fetching data */}
      {(isPendingSuperAdmin || isPendingAdmin || isPendingArticles || isPendingNews || isPendingComments || isPendingCategory) && (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <LoaderAnimation />
          <h4 className="mt-3">Loading...</h4>
        </div>
      )}

      {/* page */}
      {(!errorSuperAdmin && !errorAdmin && !errorArticles && !errorNews && !errorComments && !errorCategory) && (!isPendingSuperAdmin && !isPendingAdmin && !isPendingArticles && !isPendingNews && !isPendingComments && !isPendingCategory) && (
        <main className="min-vh-100">
          <Outlet />
        </main>
      )}

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EndUserLayout;

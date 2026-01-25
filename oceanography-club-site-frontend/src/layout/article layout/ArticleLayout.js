// This is a page layout for all article pages
import "./ArticleLayout.css";
import Slider from "../../components/slider/Slider";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet, NavLink, useParams, useLocation } from "react-router-dom";
import { useData } from "../../utils/DataContext";
import NotFound from "../../pages/enduser/NotFound";

const Article = () => {
  const { articles, category } = useData();
  const { categorySlug } = useParams();
  const location = useLocation();

  const c = category.find((c) => c.name.toLowerCase().trim().replace(/\s+/g, "-") === categorySlug)

  // Filter posts by category
  const articlePosts = articles
    .filter((post) => post.publish)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {c || location.pathname === "/article/all" ? (
        <div className="container article-layout">
          <div className="row">
            <div className="my-3 p-0" data-aos="fade-up">
              <Slider posts={articlePosts} />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-8" data-aos="fade-up">
              {/* Tab Menu */}
              <nav>
                <div
                  className="nav nav-tabs fs-5 tab-menu-divider"
                  id="nav-tab"
                  role="tablist"
                >
                  <NavLink
                    to={`/article/all`}
                    className={({ isActive }) =>
                      `nav-link fw-bold ${isActive ? "active" : "text-white"}`
                    }
                  >
                    All
                  </NavLink>
                  {category.map((c, index) => (
                    <NavLink
                      key={index}
                      to={`/article/${c.name.toLowerCase().trim().replace(/\s+/g, "-")}`}
                      className={({ isActive }) =>
                        `nav-link fw-bold ${isActive ? "active" : "text-white"}`
                      }
                    >
                      {c.name}
                    </NavLink>
                  ))}
                </div>
                <div className="divider pt-1 bg-white rounded-end"></div>
              </nav>
              <div className="mt-4 my-lg-4">
                <Outlet />
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <Sidebar />
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Article;

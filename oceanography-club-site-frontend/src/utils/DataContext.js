import { createContext, useContext, useEffect, useState } from "react";
import ApiRoutes from "../api/ApiRoutes";
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [superadmin, setSuperAdmin] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);
  const [category, setCategory] = useState([]);

  const [isPendingSuperAdmin, setIsPendingSuperAdmin] = useState(true);
  const [isPendingAdmin, setIsPendingAdmin] = useState(true);
  const [isPendingArticles, setIsPendingArticles] = useState(true);
  const [isPendingNews, setIsPendingNews] = useState(true);
  const [isPendingComments, setIsPendingComments] = useState(true);
  const [isPendingCategory, setIsPendingCategory] = useState(true);

  const [errorSuperAdmin, setErrorSuperAdmin] = useState(null);
  const [errorAdmin, setErrorAdmin] = useState(null);
  const [errorArticles, setErrorArticles] = useState(null);
  const [errorNews, setErrorNews] = useState(null);
  const [errorComments, setErrorComments] = useState(null);
  const [errorCategory, setErrorCategory] = useState(null);

  useEffect(() => {
      getSuperAdmin();
      getAdmin();
      getArticle();
      getNews();
      getComment();
      getCategory();
  }, []);

  // Get data from APIs
  const getSuperAdmin = () => {
    axios.get(ApiRoutes.SUPERADMIN.GET)
      .then((res) => {
        setSuperAdmin(res.data?.response || []);
        setIsPendingSuperAdmin(false);
        setErrorSuperAdmin(null);
      }).catch(err => {
        setIsPendingSuperAdmin(false);
        setErrorSuperAdmin(err.message);
      });
  };

  const getAdmin = () => {
    axios.get(ApiRoutes.ADMIN.GET)
      .then((res) => {
        setAdmin(res.data?.response || []);
        setIsPendingAdmin(false);
        setErrorAdmin(null);
      }).catch(err => {
        setIsPendingAdmin(false);
        setErrorAdmin(err.message);
      });
  };

  const getArticle = () => {
    axios.get(ApiRoutes.ARTICLE.GET)
      .then((res) => {
        setArticles(res.data?.response || []);
        setIsPendingArticles(false);
        setErrorArticles(null);
      }).catch(err => {
        setIsPendingArticles(false);
        setErrorArticles(err.message);
      });
  };

  const getNews = () => {
    axios.get(ApiRoutes.NEWS.GET)
      .then((res) => {
        setNews(res.data?.response || []);
        setIsPendingNews(false);
        setErrorNews(null);
      }).catch(err => {
        setIsPendingNews(false);
        setErrorNews(err.message);
      });
  };

  const getComment = () => {
    axios.get(ApiRoutes.COMMENT.GET)
      .then((res) => {
        setComments(res.data?.response || []);
        setIsPendingComments(false);
        setErrorComments(null);
      }).catch(err => {
        setIsPendingComments(false);
        setErrorComments(err.message);
      });
  };

  const getCategory = () => {
    axios.get(ApiRoutes.CATEGORY.GET)
      .then((res) => {
        setCategory(res.data?.response || []);
        setIsPendingCategory(false);
        setErrorCategory(null);
      }).catch(err => {
        setIsPendingCategory(false);
        setErrorCategory(err.message);
      });
  };

  return (
    <DataContext.Provider 
      value={{ superadmin, admin, articles, news, comments, category, getSuperAdmin, getAdmin, getArticle, getNews, getComment, getCategory, isPendingSuperAdmin, isPendingAdmin, isPendingArticles, 
        isPendingNews, isPendingComments, isPendingCategory, errorSuperAdmin, errorAdmin, errorArticles, errorNews, errorComments, errorCategory 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

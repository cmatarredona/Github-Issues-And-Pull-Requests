import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = ({ actualPage, onChange }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [actualPages, setActualPage] = useState(queryParams.get("page") || actualPage);
  const navigate = useNavigate();
  useEffect(() => {
    if (!queryParams.get("page")) {
      navigate(`${location.pathname}?page=${actualPages}`);
    }
  }, []);
  useEffect(() => {
    onChange(actualPages);
  }, [actualPages]);

  const nextPageHandler = () => {
    setActualPage(+actualPages + 1);
    navigate(`${location.pathname}?page=${actualPages + 1}`);
  };
  const prevPageHandler = () => {
    if(actualPages > 1){
      setActualPage(actualPages - 1);
      navigate(`${location.pathname}?page=${actualPages - 1}`);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={prevPageHandler}>Previous</button>
      <p>{actualPages}</p>
      <button onClick={nextPageHandler}>Next</button>
    </div>
  );
};
export default Pagination;

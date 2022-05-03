import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../../store/issues-pull-actions";
import styles from "./SearchForm.module.css";
const SearchForm = ({ onSubmitForm }) => {
  const userRef = useRef();
  const repoRef = useRef();
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    onSubmitForm(userRef.current.value, repoRef.current.value);
    dispatch(fetchAllData(userRef.current.value, repoRef.current.value));
  };
  return (
    <form onSubmit={formHandler} className={styles.form}>
      <div>
        <label htmlFor="user">Username</label>
        <input ref={userRef} type="text" id="user" placeholder="jquery" />
      </div>
      <div>
        <label htmlFor="repository">Repository</label>
        <input ref={repoRef} type="text" id="repository" placeholder="jquery" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;

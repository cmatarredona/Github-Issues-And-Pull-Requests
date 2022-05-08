import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { checkRepository } from "../../store/issues-pull-actions";
import Spinner from "../Spinner/Spinner";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSubmitForm }) => {
  const userRef = useRef();
  const repoRef = useRef();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const formHandler = async (e) => {
    e.preventDefault();
    onSubmitForm(userRef.current.value, repoRef.current.value);
    const response = await dispatch(
      checkRepository(
        userRef.current.value,
        repoRef.current.value,
        setIsLoading
      )
    );
    setMessage(response.message || "Valid repository");
    if (response.message?.includes("API rate limit exceeded")) {
      setMessage("API rate limit exceeded");
    }
  };
  const userPlaceholder = localStorage.getItem("user") || "jquery";
  const repoPlaceholder = localStorage.getItem("repository") || "jquery";
  return (
    <form onSubmit={formHandler} className={styles.form}>
      <div>
        <label htmlFor="user">Username</label>
        <input
          ref={userRef}
          type="text"
          id="user"
          placeholder={userPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="repository">Repository</label>
        <input
          ref={repoRef}
          type="text"
          id="repository"
          placeholder={repoPlaceholder}
        />
      </div>
      {isLoading && <div className={styles.wh}><Spinner /></div>}
      {!isLoading && <p className={styles.message}>{message}</p>}
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;

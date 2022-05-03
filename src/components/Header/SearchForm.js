import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllData } from "../../store/issues-pull-actions";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onSubmitForm }) => {
  const userRef = useRef();
  const repoRef = useRef();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const formHandler = async (e) => {
    e.preventDefault();
    onSubmitForm(userRef.current.value, repoRef.current.value);
    const response = await dispatch(
      fetchAllData(userRef.current.value, repoRef.current.value)
    );
    setMessage(response.message || "Valid repository");
    if(response.message.includes("API rate limit exceeded")){
      setMessage("API rate limit exceeded");
    }
  };
  const userPlaceholder = localStorage.getItem("user") || "facebook";
  const repoPlaceholder = localStorage.getItem("repository") || "react";
  console.log("placeholders", userPlaceholder, repoPlaceholder);
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
      <p className={styles.message}>{message}</p>
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;

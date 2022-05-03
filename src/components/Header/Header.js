import NavMenu from "./NavMenu";
import SearchForm from "./SearchForm";
import styles from "./Header.module.css";

const Header = ({onSubmitForm}) => {
  return (
    <header>
      <h1 className={styles.header}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github logo"/>Github searchs</h1>
      <SearchForm onSubmitForm={onSubmitForm}/>
      <NavMenu />
    </header>
  );
};
export default Header;
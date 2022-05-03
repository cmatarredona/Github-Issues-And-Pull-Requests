import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
const NavMenu = () => {
  const issueIcon = (
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      data-view-component="true"
      className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
    >
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path
        fillRule="evenodd"
        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
      ></path>
    </svg>
  );
  const pullIcon = (
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      data-view-component="true"
      className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
    >
      <path
        fillRule="evenodd"
        d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
      ></path>
    </svg>
  );
  return (
    <nav>
      <ul className={styles.navMenu}>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.active : styles.nav
            }
            to="/issues"
          >
            {issueIcon} Issues
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.active : styles.nav
            }
            to="/pulls"
          >
            {pullIcon} Pull requests
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;

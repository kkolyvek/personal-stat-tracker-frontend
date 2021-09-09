import "./Navigation.css";

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navigation(props) {
  const handleDropdownClick = () => {
    console.log("clicked");
  };

  return (
    <nav className="navbar">
      <div className="logo-item">Cal-Counter 9000</div>
      {props.user ? (
        <button className="nav-user" onClick={handleDropdownClick}>
          <h2 className="nav-user-username">{props.user.username}</h2>
          <FontAwesomeIcon
            className="nav-user-pic"
            icon={faUserCircle}
            size="3x"
          />
          <FontAwesomeIcon icon={faCaretDown} size="2x" />
        </button>
      ) : (
        <button className="nav-user" onClick={props.openModal}>
          <h2>Login</h2>
        </button>
      )}
    </nav>
  );
}

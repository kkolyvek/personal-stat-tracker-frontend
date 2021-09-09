import React from "react";
// import { CSSTransition } from "react-transition-group";
import "./Navdropdown.css";

// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==

export default function Navdropdown(props) {
  //   const [dropdownHeight, setDropdownHeight] = useState(0);
  //   const calcHeight = (element) => {
  //     const height = element.offsetHeight;
  //     setDropdownHeight(height);
  //   };

  return (
    <div className="nav-dropdown">
      {/* <CSSTransition
        in={props.isOpen}
        timeout={500}
        classNames="dropdown"
        unmountOnExit
      > */}
      <div className="dropdown">
        <button
          className="nav-dropdown-btn"
          onClick={() => {
            props.userLogout();
          }}
        >
          <h4>Logout</h4>
        </button>
      </div>
      {/* </CSSTransition> */}
    </div>
  );
}

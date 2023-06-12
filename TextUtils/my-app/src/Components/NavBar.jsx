import PropTypes from 'prop-types';
import "../App.css";
import "../App.jsx";
// import ReactSwitch from "react-switch";

const NavBar = (props) => {

    return (
        <nav className="my-nav navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="my-nav navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="my-nav nav-link active" aria-current="page" href="/">
                                {props.aboutText}
                            </a>
                        </li>
                    </ul>

                    <div className="form-check form-switch">
                        <input className="form-check-input" onChange={props.toggleTheme} checked={props.theme === "dark"} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
                    </div>

                    {/* <div className="switch">
                        <ReactSwitch onChange={props.toggleTheme} checked = {props.theme === "dark"}/>
                        <label className="form-check-label mx-2 my-2" >{props.text}</label>
                    </div> */}

                </div>
            </div>
        </nav>
    )
}

// setting the type of props here.
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

// setting default type for the props Here.
NavBar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About"
};

export default NavBar;
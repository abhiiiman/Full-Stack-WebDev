import React, { Component } from 'react'

export class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="/Resources/monkey.png" width="30" height="30" className="d-inline-block align-top" alt="" /> NewsMonkey
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Trending </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Technology </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Space </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Travel </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Gaming </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sports </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Health </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Entertainment </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Politics </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">International </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar
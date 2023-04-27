import React from 'react'
import homeIcon from './assets/home.png'
import aboutIcon from './assets/about.png'
import contactIcon from './assets/contact.png'
import writeNotesIcon from './assets/writeNotes.png'
import notesIcon from './assets/notes.png'
import { Outlet, Link } from "react-router-dom";

function Navbar(props) {
    const navbarStyle = {
        backgroundColor: "#ebf5d9"
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg" style={navbarStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >
                        <img src={notesIcon} alt="" height={"50px"} width={"50px"} title='MyNoteBook' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={props.Time}>
                                    <img src={homeIcon} alt="" height={"30px"} width={"30px"} title='Home' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    <img src={aboutIcon} alt="" height={"30px"} width={"30px"} title='About' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <img src={contactIcon} alt="" height={"30px"} width={"30px"} title='Contact' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/writeNotes" onClick={props.Time}>
                                    <img src={writeNotesIcon} alt="" height={"30px"} width={"30px"} title='Write Notes' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notes" onClick={props.Time}>
                                    <img src={notesIcon} alt="" height={"30px"} width={"30px"} title='Your Notes' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({ Title = "Enter Title Here", About = "About Us", mode, toggleGray, toggleDark, toggleRed, toggleBlue, toggleGreen, toggleYellow, toggleSky }) {

    const palleteDiamension = {
        height: '15px',
        width: '15px',
    }


    return (
        <>
            <nav className={`navbar navbar-expand-lg border-bottom bg-${mode} navbar-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{Title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">{About}</Link>
                            </li>
                        </ul>

                        <div className="themePallete mx-3 bg-white d-flex py-1 rounded-pill border border-black">
                            <button className="rounded-circle gray bg-body-secondary mx-1 border-0" onClick={toggleGray} style={palleteDiamension}></button> {/*body-secondary*/}
                            <button className="rounded-circle dark mx-1 border-0" onClick={toggleDark} style={{ ...palleteDiamension, background: '#212f3d' }}></button> {/*body-secondary*/}
                            <button className="rounded-circle red bg-danger mx-1 border-0" onClick={toggleRed} style={palleteDiamension}></button> {/*danger*/}
                            <button className="rounded-circle blue bg-primary mx-1 border-0" onClick={toggleBlue} style={palleteDiamension}></button> {/*primary*/}
                            <button className="rounded-circle green bg-success mx-1 border-0" onClick={toggleGreen} style={palleteDiamension}></button> {/*success*/}
                            <button className="rounded-circle yellow bg-warning mx-1 border-0" onClick={toggleYellow} style={palleteDiamension}></button> {/*warning*/}
                            <button className="rounded-circle sky bg-info mx-1 border-0" onClick={toggleSky} style={palleteDiamension}></button> {/*info*/}
                        </div>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    Title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     Title: "Enter Title Here",
//     About: "About Us"
// }



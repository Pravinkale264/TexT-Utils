import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  const blue = () => {
    props.ToggleMode("blue");
  }
  const white = () => {
    props.ToggleMode("white");
  }
  const black = () => {
    props.ToggleMode("black");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img style={{width:"40px",margin:"4px"}} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/word-count-checker-website-51566.png" alt="logo"/>
          <b>{props.title}</b>
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
        <a className="nav-link" href="/">{props.contact}</a>
      </li> */}
          </ul>
          <div>
              <button type='button' className='btn btn-primary mx-2' onClick={blue}>
                Blue
              </button>
              <button type='button' className='btn btn-secondary mx-2' onClick={black}>
                Dark
              </button>
              <button type='button' className='btn btn-light mx-2' onClick={white}>
                Light
              </button>
              <label
              className="form-check-label text-light"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title",
  contact: "Contact"
}



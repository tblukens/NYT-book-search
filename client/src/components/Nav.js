import React from 'react';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className={'nav-item ' + (props.home ? 'active' : '')}>
            <a className="nav-link" href="/">
              Search
            </a>
          </li>
          <li className={'nav-item ' + (props.saved ? 'active' : '')}>
            <a className="nav-link" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

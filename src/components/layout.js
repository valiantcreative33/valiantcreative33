import React from "react";
import { Link } from "gatsby";

const Layout = props => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="/#"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav">
              <li className="nav-home nav-current">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-contact">
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo">
              {/* {title} */}
              <a href="/">
                <img
                  src="/logos/logo-color-horiz.svg"
                  height={50}
                  alt="valiant creative"
                />
              </a>
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://github.com/valiantcreative33/"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/valiantcreative/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <Link
                href="https://www.behance.net/valiantcreative"
                title="Bēhance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bēhance
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        React Portfolio of{" "}
        <a
          href="https://github.com/valiantcreative33/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ruben Matamoros
        </a>
      </footer>
    </div>
  );
};

export default Layout;

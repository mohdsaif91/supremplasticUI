import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="site-wrap" id="home-section">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <li className="active">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="services.html" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3 ">
              <div className="site-logo">
                <NavLink to="index.html" className="font-weight-bold">
                  Supreme Plastic
                </NavLink>
              </div>
            </div>
            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none">
                <NavLink
                  to="#"
                  className="text-primary site-menu-toggle js-menu-toggle py-5"
                >
                  <span className="icon-menu h3 text-primary"></span>
                </NavLink>
              </span>
              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="active">
                    <NavLink activeClassName="active-link" to="/" active>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service" className="nav-link">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="blog.html" className="nav-link">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactUs" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="ftco-blocks-cover-1">
        <div className="site-section-cover half-bg">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8">
                <h1
                  className="mb-5 text-primary font-weight-bold"
                  data-aos="fade-up"
                >
                  Grow Up Your <span className="typed-words">Business</span>.
                </h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  <a href="/" className="more-29291">
                    View Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="">
              <div className="feature-92912">
                <span className="wrap-icon flaticon-debt"></span>
                <h2 className="heading">Financial Analysis</h2>
                <p>
                  Our Products are Strong and Durable   
                </p>
                <p>
                  <a href="/" className="more-92913">
                    View Our Services
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-92912 active">
                <span className="wrap-icon flaticon-growth"></span>
                <h2 className="heading">Marketing Plans</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!
                </p>
                <p>
                  <a href="/" className="more-92913">
                    View Our Services
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-92912">
                <span className="wrap-icon flaticon-business-plan"></span>
                <h2 className="heading">Optimize Solutions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!
                </p>
                <p>
                  <a href="/" className="more-92913">
                    View Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section bg-left-half mb-5">
        <div class="container block-13">
          <h2 class="text-primary mb-5 font-weight-bold">Our Solutions</h2>
          <div class="owl-carousel nonloop-block-13 owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div className="owl-item cloned">
                  <div class="media-29101">
                    <a href="/">
                      <img
                        src="https://preview.colorlib.com/theme/arcwork/images/ximg_1.jpg.pagespeed.ic.P8MNjyRbWD.webp"
                        alt="error"
                        class="img-fluid"
                        data-pagespeed-url-hash="526215920"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                    <h3>
                      <a href="/">Consectetur Adipisicing Elit</a>
                    </h3>
                  </div>
                </div>
                <div className="owl-item cloned">
                  <div class="media-29101">
                    <a href="/">
                      <img
                        src="https://preview.colorlib.com/theme/arcwork/images/ximg_3.jpg.pagespeed.ic.0emEKcBRLs.webp"
                        alt="error"
                        class="img-fluid"
                        data-pagespeed-url-hash="820715841"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                    <h3>
                      <a href="/">Beatae Doloribu</a>
                    </h3>
                  </div>
                </div>
                <div className="owl-item cloned">
                  <div class="media-29101">
                    <a href="/">
                      <img
                        src="https://preview.colorlib.com/theme/arcwork/images/ximg_2.jpg.pagespeed.ic.NY5VsNna8l.webp"
                        alt="error"
                        class="img-fluid"
                        data-pagespeed-url-hash="1115215762"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                    <h3>
                      <a href="/">Accusantium Eius Soluta</a>
                    </h3>
                  </div>
                </div>
                <div className="owl-item cloned">
                  <div class="media-29101">
                    <a href="/">
                      <img
                        src="https://preview.colorlib.com/theme/arcwork/images/ximg_1.jpg.pagespeed.ic.P8MNjyRbWD.webp"
                        alt="error"
                        class="img-fluid"
                        data-pagespeed-url-hash="526215920"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                    <h3>
                      <a href="/">Consectetur Adipisicing Elit</a>
                    </h3>
                  </div>
                </div>
                <div className="owl-item cloned">
                  <div class="media-29101">
                    <a href="/">
                      <img
                        src="https://preview.colorlib.com/theme/arcwork/images/ximg_3.jpg.pagespeed.ic.0emEKcBRLs.webp"
                        alt="error"
                        class="img-fluid"
                        data-pagespeed-url-hash="820715841"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                    <h3>
                      <a href="/">Beatae Doloribu</a>
                    </h3>
                  </div>
                </div>
                <div className="owl-item cloned">
                  <div class="media-29101">
                    <a href="/">
                      <img
                        src="https://preview.colorlib.com/theme/arcwork/images/ximg_2.jpg.pagespeed.ic.NY5VsNna8l.webp"
                        alt="error"
                        class="img-fluid"
                        data-pagespeed-url-hash="1115215762"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                    <h3>
                      <a href="/">Accusantium Eius Soluta</a>
                    </h3>
                  </div>
                </div>
                <div className="owl-nav">
                  <div className="owl-prev">prev</div>
                  <div className="owl-next">next</div>
                  <div className="owl-dots">
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot active">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

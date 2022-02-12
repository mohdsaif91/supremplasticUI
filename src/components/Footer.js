import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container- footer-inner">
        <div className="row">
          <div className="container-item">
            <div className="footer-item clearfix">
              <img
                src="assets/img/logos/black-logo.png"
                alt="logo"
                className="f-logo"
              />
              <ul className="contact-info">
                <li>
                  <i className="flaticon-pin"></i>20/F Green Road, Dhanmondi,
                  Dhaka
                </li>
                <li>
                  <i className="flaticon-mail"></i>
                  <a href="mailto:sales@hotelempire.com">
                    info@themevessel.com
                  </a>
                </li>
                <li>
                  <i className="flaticon-phone"></i>
                  <a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                </li>
                <li>
                  <i className="flaticon-fax"></i>+0477 85X6 552
                </li>
              </ul>
            </div>
          </div>
          <div className="container-item">
            <div className="footer-item">
              <h4>Helpful Links</h4>
              <div className="s-border"></div>
              <div className="m-border"></div>
              <ul className="links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Faq's</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-item">
            <div className="footer-item">
              <h4>Support</h4>
              <div className="s-border"></div>
              <div className="m-border"></div>
              <ul className="links">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-item">
            <div className="footer-item clearfix">
              <h4>Subscribe</h4>
              <div className="s-border"></div>
              <div className="m-border"></div>
              <div className="Subscribe-box">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </p>
                <form className="form-inline" action="#" method="GET">
                  <input
                    type="text"
                    className="form-control mb-sm-0"
                    id="inlineFormInputName3"
                    placeholder="Email Address"
                  />
                  <button type="submit" className="btn">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

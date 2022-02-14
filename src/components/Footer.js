import React from "react";

export default function Footer() {
  return (
    <>
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
    <div className="sub-footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <p className="copy">© 2019 <a href="#">Theme Vessel.</a> All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 col-md-6">
                <ul className="social-list clearfix">
                    <li><a href="#" className="f-facebook-bg"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="f-twitter-bg"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="f-google-bg"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#" className="f-rss-bg"><i className="fa fa-rss"></i></a></li>
                    <li><a href="#" className="f-linkedin-bg"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</>
  );
}

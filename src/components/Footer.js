import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import LocationIcon from "../assets/location-icon.svg";
import PhoneIcon from "../assets/phone-icon.svg";
import MailIcon from "../assets/mail-icon.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import YoutubeIcon from "../assets/movie.svg";
import Whatsapp from "../assets/whatsapp.svg";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-item">
          <div className="busniess-info">
            <div className="info-item">
              <img alt="" src={LocationIcon} className="busniess-icon-class" />
              <div className="img-text">
                <h3>Find us</h3>
                <div className="busniess-text">
                  1010 Avenue, sw 54321, chandigarh
                </div>
              </div>
            </div>
          </div>
          <div className="busniess-info">
            <div className="info-item">
              <img alt="" src={PhoneIcon} className="busniess-icon-class" />
              <div className="img-text">
                <h3>Call us</h3>
                <div className="busniess-text">
                  <a href="tel:9167605650">+91 9167605650</a>
                </div>
              </div>
            </div>
          </div>
          <div className="busniess-info">
            <div className="info-item">
              <img alt="" src={MailIcon} className="busniess-icon-class" />
              <div className="img-text">
                <h3>Mail us</h3>
                <div className="busniess-text">
                  <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-section">
          <div className="busniess-info">
            <div className="social-media">
              <div className="social-heading">Follow us</div>
              <div className="social-media-icon mt-2">
                <img
                  alt=""
                  src={FacebookIcon}
                  className="busniess-icon-class mr-2"
                />
                <img
                  alt=""
                  src={InstagramIcon}
                  className="busniess-icon-class mr-2"
                />
                <img
                  alt=""
                  src={YoutubeIcon}
                  className="busniess-icon-class mr-2"
                />
                <img
                  alt=""
                  src={Whatsapp}
                  className="busniess-icon-class mr-2"
                />
              </div>
            </div>
          </div>
          <div className="busniess-info">
            <div className="social-heading">Having any queries ?</div>
            <div className="sub-heading mt-2">
              <button
                onClick={() => navigate("/contactUs")}
                className="btn contact-us-btn mt-3"
              >
                Connect with us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-fotter">
        <div className="site-logo mt-4">
          <NavLink to="index.html" className="font-weight-bold">
            Supreme Plastic
          </NavLink>
        </div>
        <div className="page-links">
          <a className="page-item">Home</a>
          <a className="page-item">Product</a>
          <a className="page-item">Services</a>
          <a className="page-item">contact us</a>
        </div>
      </div>
    </React.Fragment>
  );
}

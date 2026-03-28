import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section">
            <div className="company-header">
              <div className="vitara-logo">T</div>
              <h2 className="company-name">Trendify</h2>
            </div>
            <p className="company-description">
              Your trusted e-commerce platform for quality products and
              exceptional service.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sri-charan-palem/"
                className="social-icon"
                style={{ color: "#1877F2" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://www.instagram.com/wildcharan/?__pwa=1"
                className="social-icon"
                style={{ color: "#FD1D1D" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://github.com/SriCharan12-hub"
                className="social-icon"
                style={{ color: "#4A8F4" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://wa.me/7675904571"
                className="social-icon"
                style={{ color: "#25D366" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="section-title">Company</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-section">
            <h3 className="section-title">Support</h3>
            <ul className="footer-links">
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h3 className="section-title">Legal</h3>
            <ul className="footer-links">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Vitara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Header */}
                <div className="footer-header">
                    <a href="/" className="logo">
                        <h2>Logo</h2>
                    </a>
                    <div className="social-links">
                        <a href=""><FaFacebook className="social-icon" /></a>
                        <a href=""><FaInstagram className="social-icon" /></a>
                        <a href=""><IoLogoTwitter className="social-icon" /></a>
                    </div>
                </div>

                {/* Main Content */}
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3>Company Info</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div className="footer-section">
                        <h3>Features</h3>
                        <ul>
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li>Audi Cars</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className="footer-section">
                        <h3>Get In Touch</h3>
                        <div className="subscribe-form">
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                            <button>Subscribe</button>
                        </div>
                        <p className="subscribe-text">Lore imp sum dolor Amit</p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>
                    Made With 🖤 by <a href="https://www.linkedin.com/in/rao-asad-mehmood" target="_blank"><b>Rao Asad Mehmood</b></a> All Right Reserved!
                </p>
            </div>
        </footer>
    );
};

export default Footer;
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight, FiBriefcase, FiCode, FiLayout, FiMail } from "react-icons/fi";
import { socialLinks } from "../config/siteConfig";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <p className="footer-intro">Building modern, responsive and user-focused web experiences.</p>
                    <p className="footer-tagline">Let&apos;s build something great together.</p>
                </div>

                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#hero"><span className="link-icon"><FiArrowRight /></span>Home</a></li>
                            <li><a href="#about"><span className="link-icon"><FiArrowRight /></span>About</a></li>
                            <li><a href="#skills"><span className="link-icon"><FiArrowRight /></span>Skills</a></li>
                            <li><a href="#projects"><span className="link-icon"><FiArrowRight /></span>Projects</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Connect</h3>
                        <ul className="footer-links">
                            <li>
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                                    <span className="link-icon"><FaGithub /></span>GitHub
                                </a>
                            </li>
                            <li>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                    <span className="link-icon"><FaLinkedinIn /></span>LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                    <span className="link-icon"><FaInstagram /></span>Instagram
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${socialLinks.email}`}>
                                    <span className="link-icon"><FiMail /></span>Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Services</h3>
                        <ul className="footer-links">
                            <li><a href="#projects"><span className="link-icon"><FiCode /></span>Web Development</a></li>
                            <li><a href="#projects"><span className="link-icon"><FiLayout /></span>UI/UX Design</a></li>
                            <li><a href="#projects"><span className="link-icon"><FiBriefcase /></span>Consulting</a></li>
                            <li><a href="#contact"><span className="link-icon"><FiArrowRight /></span>Get In Touch</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">&copy; 2026 <span>NNeeraj</span>. All rights reserved.</p>
                <p className="footer-credit">Crafted with <span className="heart">♥</span> by NNeeraj</p>
            </div>
        </footer>
    );
}

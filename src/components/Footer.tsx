import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-revamp">
            <div className="container footer-content-wrapper">
                <div className="footer-brand-section">
                    <Link to="/" className="footer-logo" onClick={scrollToTop}>
                        <img src="/assets/logo.png" alt="AMONARQ" className="logo-img-footer" />
                    </Link>
                    <p className="brand-mantra">
                        Designing digital ecosystems that honor human continuity and preserve technical trust.
                    </p>
                    <div className="social-links-row">
                        <a href="#" className="social-icon-link"><Linkedin size={18} /></a>
                        <a href="#" className="social-icon-link"><Twitter size={18} /></a>
                        <a href="#" className="social-icon-link"><Github size={18} /></a>
                    </div>
                </div>

                <div className="footer-links-grid">
                    <div className="links-col">
                        <h5>Quick Links</h5>
                        <Link to="/" onClick={scrollToTop}>Home</Link>
                        <Link to="/about" onClick={scrollToTop}>About Us</Link>
                        <Link to="/philosophy" onClick={scrollToTop}>Philosophy</Link>
                        <Link to="/product" onClick={scrollToTop}>Mynxt</Link>
                    </div>
                    <div className="links-col">
                        <h5>Resources</h5>
                        <Link to="/trust" onClick={scrollToTop}>Trust & Security</Link>
                        <Link to="/contact" onClick={scrollToTop}>Contact</Link>
                        <a href="#">Privacy Policy <ArrowUpRight size={14} /></a>
                        <a href="#">Terms of Service <ArrowUpRight size={14} /></a>
                    </div>
                    <div className="links-col contact-col">
                        <h5>Get in Touch</h5>
                        <div className="contact-info-item">
                            <Mail size={16} />
                            <span>contact@amonarq.com</span>
                        </div>
                        <div className="contact-info-item">
                            <MapPin size={16} />
                            <span>Madanapalle, AP, India - 517325</span>
                        </div>
                        <div className="contact-info-item">
                            <Globe size={16} />
                            <span>www.amonarq.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-line">
                <div className="container flex-bottom">
                    <p>&copy; {new Date().getFullYear()} Amonarq Systems Private Limited.</p>
                    <div className="legal-links">
                        <span>UIN: U72200AP2021PTC118123</span>
                        <span className="separator">|</span>
                        <span>CIN: L72200AP2021PTC118123</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Heart } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-page">
            {/* Immersive Hero Section */}
            <section className="about-hero-revamp">
                <div className="hero-bg-overlay">
                    <img src="/assets/about_hero.png" alt="About Amonarq Background" className="hero-bg-img" />
                    <div className="hero-gradient-overlay"></div>
                </div>
                <div className="container relative-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="about-hero-content"
                    >
                        <span className="hero-tag">OUR JOURNEY</span>
                        <h1 className="hero-title">A Legacy of <span className="text-gradient">Trust</span></h1>
                        <p className="hero-lead">
                            Amonarq is a technology powerhouse dedicated to systems that prioritize human attention, digital continuity, and uncompromising trust.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="about-story section bg-secondary">
                <div className="container story-grid">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>The Amonarq Narrative</h2>
                        <p>
                            We believe technology should quietly support life — not interrupt it. Amonarq was founded on the principle that digital tools should be invisible facilitators of human intent, rather than demanding centers of attention.
                        </p>
                        <p>
                            In an era of notifications and fragmented experiences, we stand for continuity. We build for the long haul, focusing on stability over hype and security over speed.
                        </p>
                        <div className="company-badge">
                            <Globe size={20} />
                            <span>India-based operations • Built with global standards</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="story-stats"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="stat-card">
                            <h3>Registered Entity</h3>
                            <p>Amonarq Systems Pvt Ltd is a legally registered company committed to accountability and regulatory compliance.</p>
                        </div>
                        <div className="stat-card">
                            <h3>Secure Foundation</h3>
                            <p>Every line of code we write is vetted for security and privacy, ensuring a foundation you can trust.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="values section">
                <div className="container">
                    <div className="values-grid">
                        <div className="value-item">
                            <ShieldCheck className="value-icon" />
                            <h4>Global Standards</h4>
                            <p>We adhere to international best practices in data protection and systems architecture.</p>
                        </div>
                        <div className="value-item">
                            <Heart className="value-icon" />
                            <h4>Human-First</h4>
                            <p>Our design philosophy starts and ends with the human experience and digital well-being.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

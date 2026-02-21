import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, ShieldOff, Fingerprint, MousePointer2, ArrowRight } from 'lucide-react';
import './Product.css';

const Product: React.FC = () => {
    return (
        <div className="product-page">
            {/* Immersive Product Hero */}
            <section className="product-hero-revamp">
                <div className="hero-bg-overlay">
                    <img src="/assets/product.png" alt="Mynxt Background" className="hero-bg-img" />
                    <div className="hero-gradient-overlay"></div>
                </div>
                <div className="container relative-content">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="product-hero-center"
                    >
                        <span className="hero-tag">FLAGSHIP EXPERIENCE</span>
                        <h1 className="hero-title">Mynxt</h1>
                        <p className="hero-lead">The digital embodiment of continuity.</p>
                        <motion.div
                            className="hero-scroll-indicator"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="mouse"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="product-showcase section bg-secondary">
                <div className="container p-grid">
                    <motion.div
                        className="p-visual"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="image-frame">
                            <img src="/assets/product.png" alt="Mynxt Digital Experience" />
                            <div className="frame-glow"></div>
                        </div>
                    </motion.div>

                    <div className="p-details">
                        <motion.div
                            className="p-feature-revamp"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="icon-wrapper"><Coffee className="p-icon" /></div>
                            <div>
                                <h4>Designed for Calm Usage</h4>
                                <p>No high-velocity triggers or dopamine loops. Mynxt respects your pace and mental space.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="p-feature-revamp"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="icon-wrapper"><Fingerprint className="p-icon" /></div>
                            <div>
                                <h4>Privacy-First Architecture</h4>
                                <p>Your data stays yours. Built with zero-knowledge encryption and local-first data principles.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="p-feature-revamp"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="icon-wrapper"><MousePointer2 className="p-icon" /></div>
                            <div>
                                <h4>Minimal Interaction</h4>
                                <p>Do more with less. Intentional interaction patterns that reduce friction and screen time.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="cta-section-revamp">
                <div className="container">
                    <motion.div
                        className="cta-immersive-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="cta-bg-glow"></div>
                        <div className="cta-visual-element">
                            <img src="/assets/product.png" alt="Mynxt Experience" className="cta-img-blur" />
                        </div>
                        <div className="cta-content-revamp">
                            <span className="cta-tag">FUTURE OF DIGITAL TRUST</span>
                            <h2>Ready for <span className="text-gradient">Continuity?</span></h2>
                            <p>Join an exclusive collective moving towards intentional and uninterrupted digital living. Shape the future of calm technology with Amonarq.</p>
                            <div className="cta-actions-row">
                                <button className="btn-v2 btn-glow">Request Early Access <ArrowRight size={20} /></button>
                                <div className="cta-status-badge">
                                    <div className="pulse-dot"></div>
                                    <span>STAGING OPEN: Q3 2026</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Product;

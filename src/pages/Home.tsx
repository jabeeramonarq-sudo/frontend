import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Fingerprint, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page-revamp">
            {/* Immersive Home Hero */}
            <section className="home-hero-revamp">
                <div className="hero-bg-media">
                    <img src="/assets/hero.png" alt="Amonarq Hero" className="hero-img" />
                    <div className="hero-overlay-dark"></div>
                </div>

                <div className="container hero-content-container">
                    <div className="watermark-home">AMONARQ</div>
                    <motion.div
                        className="home-hero-main"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="hero-pre-title">CONTINUITY-FIRST SYSTEMS</span>
                        <h1 className="hero-title-large">
                            Preserving <span className="text-gradient">Life’s Flow</span> In a Chaotic World.
                        </h1>
                        <p className="hero-subtitle-large">
                            We design digital products focused on human attention, unwavering trust, and uninterrupted continuity.
                        </p>
                        <div className="hero-actions-large">
                            <Link to="/product" className="btn-v2 btn-glow">
                                Experience Mynxt <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn-v2 btn-ghost">
                                Secure Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Amonarq (Revamped) */}
            <section className="why-amonarq-v2 section">
                <div className="container">
                    <div className="section-header-v2">
                        <h2>The Continuity Standard</h2>
                        <p>Moving beyond the noise of traditional tech to build what truly lasts.</p>
                    </div>

                    <div className="features-grid-v2">
                        <motion.div
                            className="feature-card-v2"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Activity className="card-icon-v2" color="#22C55E" />
                            <h3>Context Preservation</h3>
                            <p>Systems that remember where you left off, ensuring your mental thread remains unbroken across all digital interactions.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card-v2"
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Shield className="card-icon-v2" color="#38BDF8" />
                            <h3>Absolute Sovereignty</h3>
                            <p>Your data is yours. Period. We build architecture that empowers the user while maintaining global security standards.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card-v2"
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Fingerprint className="card-icon-v2" color="#FACC15" />
                            <h3>Minimal Intrusion</h3>
                            <p>Quiet technology. We respect your attention and design for zero unnecessary notifications or distractions.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Flagship Highlight (Revamped) */}
            <section className="product-showcase-v2 section bg-secondary">
                <div className="container product-grid-v2">
                    <div className="product-text-v2">
                        <div className="watermark-side">MYNXT</div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="tag-v2">AMONARQ PRODUCT</span>
                            <h3>Mynxt</h3>
                            <p className="p-desc-v2">
                                A continuity-first digital experience crafted for high-trust environments and individuals who value digital tranquility.
                            </p>
                            <Link to="/product" className="btn-v2 btn-outline-v2">
                                Learn About Mynxt
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        className="product-visual-v2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="visual-outer">
                            <img src="/assets/product.png" alt="Mynxt Experience" />
                            <div className="inner-glow"></div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;

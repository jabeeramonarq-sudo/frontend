import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Lock, EyeOff } from 'lucide-react';
import './Trust.css';

const Trust: React.FC = () => {
    return (
        <div className="trust-page">
            {/* Immersive Trust Hero */}
            <section className="trust-hero-revamp">
                <div className="hero-bg-overlay">
                    <img src="/assets/trust.png" alt="Trust Background" className="hero-bg-img" />
                    <div className="hero-gradient-overlay"></div>
                </div>
                <div className="container relative-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="trust-hero-content"
                    >
                        <span className="hero-tag">SECURITY & COMPLIANCE</span>
                        <h1 className="hero-title">Unyielding <span className="text-gradient">Integrity</span></h1>
                        <p className="hero-lead">
                            Amonarq operates with transparency, adhering to global security standards while protecting individual digital sovereignty.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="compliance section bg-secondary">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-content">
                            <h2>Legal & Compliance</h2>
                            <div className="compliance-item">
                                <FileText className="trust-icon" />
                                <div>
                                    <h4>IT Act, 2000 (India)</h4>
                                    <p>Our digital operations and data handling processes are designed in alignment with the applicable Indian Information Technology laws.</p>
                                </div>
                            </div>
                            <div className="compliance-item">
                                <ShieldCheck className="trust-icon" />
                                <div>
                                    <h4>Data Protection Excellence</h4>
                                    <p>We implement data protection best practices, ensuring transparency and user control at every level.</p>
                                </div>
                            </div>
                            <div className="compliance-item">
                                <Lock className="trust-icon" />
                                <div>
                                    <h4>Encryption Standards</h4>
                                    <p>HTTPS and SSL are enforced across all services. Data is encrypted both at rest and in transit using industry-standard protocols.</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="trust-visual-frame"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="/assets/trust.png" alt="Security Abstract" />
                            <div className="secure-glow"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="security-principles section">
                <div className="container">
                    <h2 className="section-subtitle">Our Security Core</h2>
                    <div className="principles-grid">
                        <div className="principle-card">
                            <EyeOff size={32} color="#38BDF8" className="mb-4" />
                            <h3>Minimal Data Collection</h3>
                            <p>We only ask for what we absolutely need to provide our services. Your personal footprint is kept to a minimum.</p>
                        </div>
                        <div className="principle-card">
                            <Lock size={32} color="#22C55E" className="mb-4" />
                            <h3>No Data Selling</h3>
                            <p>Amonarq does not and will never sell user data. Our business model is built on trust, not advertising.</p>
                        </div>
                        <div className="principle-card">
                            <ShieldCheck size={32} color="#FACC15" className="mb-4" />
                            <h3>Access Control</h3>
                            <p>Strict internal access controls ensure that your data is handled only by authorized systems and personnel.</p>
                        </div>
                    </div>

                    <div className="disclaimer">
                        <p>Designed in alignment with applicable Indian IT and data protection norms.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trust;

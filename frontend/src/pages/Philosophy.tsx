import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ZapOff, BellOff, CheckCircle } from 'lucide-react';
import './Philosophy.css';

const Philosophy: React.FC = () => {
    return (
        <div className="philosophy-page">
            <section className="phil-hero-revamp">
                <div className="hero-bg-overlay">
                    <img src="/assets/philosophy_hero.png" alt="Philosophy Background" className="hero-bg-img" />
                    <div className="hero-gradient-overlay"></div>
                </div>
                <div className="container relative-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="phil-hero-content"
                    >
                        <span className="hero-tag">THE CONTINUITY PRINCIPLE</span>
                        <h1 className="hero-title">Designing for <span className="text-gradient">Flow</span></h1>
                        <p className="hero-lead">
                            We reject the fragmented digital experience. Our philosophy is built on the preservation of context and the respect for human time.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="continuity-blocks section bg-secondary">
                <div className="container grid-container">
                    <motion.div
                        className="phil-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Layers className="phil-icon" />
                        <h3>Preserving Context</h3>
                        <p>Life is fragmented by notifications and digital noise. Amonarq designs systems that carry context forward, ensuring your mental thread remains intact.</p>
                    </motion.div>

                    <motion.div
                        className="phil-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <ZapOff className="phil-icon" />
                        <h3>No Spam. No Fluff.</h3>
                        <p>We reject the attention economy. No unnecessary interruptions. No data-selling tactics. Only what matters, when it matters.</p>
                    </motion.div>

                    <motion.div
                        className="phil-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <BellOff className="phil-icon" />
                        <h3>Silent Support</h3>
                        <p>Technology should be a quiet partner. Our systems are designed to exist in the background, ready when you are, silent when you aren't.</p>
                    </motion.div>
                </div>
            </section>

            <section className="emotional-trust section">
                <div className="container">
                    <div className="quote-block">
                        <blockquote>
                            "Continuity is the invisible bridge between human intent and digital execution."
                        </blockquote>
                        <cite>— The Amonarq Philosophy</cite>
                    </div>

                    <div className="checklist">
                        <div className="check-item">
                            <CheckCircle size={20} color="#22C55E" />
                            <span>Reduced cognitive load</span>
                        </div>
                        <div className="check-item">
                            <CheckCircle size={20} color="#22C55E" />
                            <span>Uninterrupted human flow</span>
                        </div>
                        <div className="check-item">
                            <CheckCircle size={20} color="#22C55E" />
                            <span>Long-term digital peace</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;

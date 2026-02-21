import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            {/* Immersive Contact Hero */}
            <section className="contact-hero-revamp">
                <div className="hero-bg-overlay">
                    <img src="/assets/contact_hero.png" alt="Contact Background" className="hero-bg-img" />
                    <div className="hero-gradient-overlay"></div>
                </div>
                <div className="container relative-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="contact-hero-content"
                    >
                        <span className="hero-tag">GET IN TOUCH</span>
                        <h1 className="hero-title">Start a <span className="text-gradient">Dialogue</span></h1>
                        <p className="hero-lead">
                            We value quiet, intentional communication. Reach out to the Amonarq team for inquiries, business partnerships, or early access.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-content section bg-secondary">
                <div className="container contact-grid-revamp">
                    <div className="contact-info-cards">
                        <motion.div
                            className="info-detail-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-icon"><Mail /></div>
                            <h3>Email Us</h3>
                            <p>contact@amonarq.com</p>
                            <p>business@amonarq.com</p>
                        </motion.div>

                        <motion.div
                            className="info-detail-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="card-icon"><MapPin /></div>
                            <h3>Visit Us</h3>
                            <p>Row House, Prasanth Nagar,</p>
                            <p>Madanapalle, AP - 517325</p>
                        </motion.div>

                        <motion.div
                            className="info-detail-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="card-icon"><MessageSquare /></div>
                            <h3>Corporate</h3>
                            <p>Amonarq Systems Pvt Ltd</p>
                            <p>CIN: L72200AP2021PTC118123</p>
                        </motion.div>
                    </div>

                    <motion.div
                        className="contact-form-revamp"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-header">
                            <h2>Send a Message</h2>
                            <p>Our team typically responds within 24-48 business hours.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Inquiry regarding Mynxt"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`submit-btn-revamp ${status}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Transmitting...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {status === 'success' && <div className="status-success">Message transmitted successfully.</div>}
                            {status === 'error' && <div className="status-error">Transmission failed. Please try again.</div>}
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

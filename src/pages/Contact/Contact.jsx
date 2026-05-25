import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, HelpCircle, Calendar, Cpu, User } from 'lucide-react';
import './contact.css';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  
  // Scheduler States
  const [selectedTopic, setSelectedTopic] = useState('tds');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const topicsList = [
    { id: 'tds', name: 'Raw TDS & Hardness Diagnosis' },
    { id: 'metals', name: 'Heavy Metals (Arsenic/Lead) Check' },
    { id: 'install', name: 'Master-Sink Custom Routing Setup' }
  ];

  const timeSlots = ['10:00 AM', '12:30 PM', '03:00 PM', '05:30 PM'];

  const submitForm = (e) => {
    e.preventDefault();
    if (name && email && phone && msg) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName('');
        setEmail('');
        setPhone('');
        setMsg('');
      }, 5000);
    }
  };

  const contactOptions = [
    { icon: <Phone size={20} />, label: "Luxury Support Hotline", detail: "1800-420-9999", sub: "Toll-Free, 24/7 Support" },
    { icon: <Mail size={20} />, label: "Direct Inquiries", detail: "concierge@gplusseries.com", sub: "Response within 3 hours" },
    { icon: <MapPin size={20} />, label: "Corporate Office", detail: "DLF CyberCity, Phase III", sub: "Gurugram, HR, India" },
    { icon: <Clock size={20} />, label: "Installation Hours", detail: "08:00 AM - 09:00 PM", sub: "Monday - Sunday" }
  ];

  return (
    <div className="contact-page light-luxury">
      {/* Immersive Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <div className="contact-orb contact-orb--1" />
          <div className="contact-orb contact-orb--2" />
        </div>

        <div className="container">
          <motion.div
            className="contact-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Concierge Desk</span>
            <h1 className="contact-hero__title">Let's Connect</h1>
            <p className="contact-hero__subtitle">
              Have questions about CCK technology, custom design integrations, or scheduled service plans? Our concierge team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form & details */}
      <section className="contact-details section">
        <div className="container">
          <div className="contact-details__grid">
            
            {/* Left: Contact Channels */}
            <div className="contact-channels">
              <div className="channels-title-row">
                <h2>Direct Channels</h2>
                <p>Reach out directly to CCK corporate service networks.</p>
              </div>

              <div className="channels-grid">
                {contactOptions.map((opt, i) => (
                  <motion.div
                    key={i}
                    className="channel-card glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="channel-icon-wrapper">
                      {opt.icon}
                    </div>
                    <div className="channel-info">
                      <h4>{opt.label}</h4>
                      <strong>{opt.detail}</strong>
                      <span>{opt.sub}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Service guarantee */}
              <div className="channels-guarantee glass">
                <ShieldCheck size={20} className="text-aqua" />
                <span>
                  All installations include our 24-hour service guarantee.
                </span>
              </div>

              {/* Premium Vector Service Coverage Map */}
              <div className="coverage-map-widget glass">
                <h4>Luxury Service Coverage</h4>
                <p>24-hour installation response active in these luxury sectors.</p>
                <div className="map-canvas">
                  <svg className="vector-map-svg" viewBox="0 0 400 300" fill="none">
                    {/* Simplified India Map Grid / Stylized Mesh */}
                    <path d="M120,40 L190,30 L220,90 L260,110 L280,180 L230,260 L180,280 L160,220 L100,160 L100,100 Z" fill="rgba(14, 165, 233, 0.02)" stroke="rgba(14, 165, 233, 0.08)" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Delhi NCR Radar Dot */}
                    <g className="radar-node">
                      <circle cx="170" cy="90" r="12" className="radar-pulse" fill="rgba(14, 165, 233, 0.15)" />
                      <circle cx="170" cy="90" r="4" fill="#0ea5e9" />
                      <text x="180" y="93" fill="var(--color-text-primary)" fontSize="10" fontWeight="600">Delhi NCR</text>
                    </g>

                    {/* Mumbai Radar Dot */}
                    <g className="radar-node">
                      <circle cx="130" cy="180" r="12" className="radar-pulse" fill="rgba(14, 165, 233, 0.15)" />
                      <circle cx="130" cy="180" r="4" fill="#0ea5e9" />
                      <text x="140" y="183" fill="var(--color-text-primary)" fontSize="10" fontWeight="600">Mumbai</text>
                    </g>

                    {/* Pune Radar Dot */}
                    <g className="radar-node">
                      <circle cx="140" cy="200" r="12" className="radar-pulse" fill="rgba(14, 165, 233, 0.15)" />
                      <circle cx="140" cy="200" r="4" fill="#0ea5e9" />
                      <text x="150" y="203" fill="var(--color-text-primary)" fontSize="10" fontWeight="600">Pune</text>
                    </g>

                    {/* Bangalore Radar Dot */}
                    <g className="radar-node">
                      <circle cx="170" cy="240" r="12" className="radar-pulse" fill="rgba(14, 165, 233, 0.15)" />
                      <circle cx="170" cy="240" r="4" fill="#0ea5e9" />
                      <text x="180" y="243" fill="var(--color-text-primary)" fontSize="10" fontWeight="600">Bangalore</text>
                    </g>

                    {/* Hyderabad Radar Dot */}
                    <g className="radar-node">
                      <circle cx="180" cy="210" r="12" className="radar-pulse" fill="rgba(14, 165, 233, 0.15)" />
                      <circle cx="180" cy="210" r="4" fill="#0ea5e9" />
                      <text x="190" y="213" fill="var(--color-text-primary)" fontSize="10" fontWeight="600">Hyderabad</text>
                    </g>
                  </svg>
                </div>
              </div>

            </div>

            {/* Right: Premium Interactive Form / Scheduler */}
            <div className="contact-form-wrapper glass">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    className="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="success-checkmark">✓</div>
                    <h3>Consultation Booked!</h3>
                    <p>
                      Thank you. Your biochemical purity assessment has been confirmed.
                    </p>
                    <div className="biochemist-card glass">
                      <div className="bio-avatar">🔬</div>
                      <div className="bio-info">
                        <strong>Dr. Vikram Mehta</strong>
                        <span>Chief Hydrological Consultant</span>
                      </div>
                    </div>
                    <p className="success-sub">
                      A calendar reservation invitation has been dispatched to <strong>{email}</strong>. Our biochemist will call you at <strong>{phone}</strong> on <strong>{selectedDate || 'tomorrow'}</strong> at <strong>{selectedTime}</strong>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={submitForm}
                    className="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-heading">
                      <h3>Schedule biochemist Consultation</h3>
                      <p>Book a premium virtual water purity diagnosis and custom installation routing review.</p>
                    </div>

                    <div className="form-group">
                      <label>1. Select Diagnostic Topic</label>
                      <div className="scheduler-topics-grid">
                        {topicsList.map(topic => (
                          <button
                            key={topic.id}
                            type="button"
                            className={`scheduler-topic-btn glass ${selectedTopic === topic.id ? 'scheduler-topic-btn--active' : ''}`}
                            onClick={() => setSelectedTopic(topic.id)}
                          >
                            {topic.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="form-group-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required 
                          placeholder="e.g. Akshat Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required 
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="e.g. akshat@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group-row">
                      <div className="form-group">
                        <label htmlFor="date">Select Date</label>
                        <input 
                          type="date" 
                          id="date" 
                          required 
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Preferred Time Slot</label>
                        <select 
                          className="scheduler-time-select"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        >
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message details (Optional)</label>
                      <textarea 
                        id="message" 
                        rows={3}
                        placeholder="Briefly describe your raw tap water odor or hard scale levels..."
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn-primary contact-submit-btn magnetic">
                      <span>Reserve Consultation</span>
                      <Send size={14} />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

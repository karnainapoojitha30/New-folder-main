import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Footer from '../components/Footer';
import PublicNavbar from '../components/PublicNavbar';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call and success state
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <PublicNavbar />

      {/* Header Section */}
      <div style={{
        padding: '8rem 2rem 4rem',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)',
        position: 'relative'
      }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', top: '10%', left: '10%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', bottom: '10%', right: '15%', pointerEvents: 'none' }} />

        <div className="animate-fade-up" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#fff' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Have questions about EduSpark AI or need assistance? We're here to help you accelerate your learning journey. Drop us a message!
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 6rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem'
      }}>

        {/* Contact Info */}
        <div className="animate-fade-up delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, color: '#fff' }}>
              <MessageSquare color="var(--accent-primary)" size={28} /> Contact Information
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.1rem' }}>
              Reach out to our support team for any inquiries about courses, platform features, or enterprise solutions. We typically respond within 24 hours.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '50%' }}>
              <Mail color="var(--accent-primary)" size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem', color: '#fff' }}>Email Us</h4>
              <p style={{ color: 'var(--text-muted)' }}>support@eduspark.ai</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '50%' }}>
              <Phone color="var(--accent-primary)" size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem', color: '#fff' }}>Call Us</h4>
              <p style={{ color: 'var(--text-muted)' }}>9845678901</p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '50%' }}>
              <MapPin color="var(--accent-primary)" size={28} />
            </div>
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem', color: '#fff' }}>Location</h4>
              <p style={{ color: 'var(--text-muted)' }}>Visakhapatnam, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel animate-fade-up delay-2" style={{ padding: '3rem 2.5rem', borderTop: '4px solid var(--accent-primary)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: 700, color: '#fff' }}>Send us a Message</h3>

          {isSubmitted ? (
            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                width: '80px', height: '80px',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                <Send color="var(--accent-success)" size={40} />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>Message Sent Successfully!</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Thank you for reaching out. Our support team has received your message and will get back to you shortly.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  marginTop: '2.5rem',
                  padding: '0.875rem 2rem',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Subject / Doubts</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What do you need help with?"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Message Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your issue or doubt in detail..."
                  rows="5"
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: '#fff',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginTop: '1rem',
                  border: 'none',
                  boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.5)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(59, 130, 246, 0.39)'; }}
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Reusing Footer */}
      <Footer />
    </div>
  );
}

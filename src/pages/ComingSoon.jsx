import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';

export default function ComingSoon({ title = "Coming Soon" }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary, #0f172a)' }}>
      <PublicNavbar />
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--text-primary, #f8fafc)',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div className="animate-fade-up">
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            borderRadius: '50%',
            marginBottom: '2rem',
            display: 'inline-block'
          }}>
            <Construction size={64} color="var(--accent-primary, #38bdf8)" />
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>{title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted, #94a3b8)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            We're working hard to bring you this page. Stay tuned for exciting updates!
          </p>
          <Link to="/" style={{
            backgroundColor: 'var(--accent-primary, #38bdf8)',
            color: '#fff',
            padding: '0.875rem 2rem',
            borderRadius: 'var(--radius-full, 9999px)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            display: 'inline-block'
          }}>
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Brain, Search } from 'lucide-react';
import logo from '../assets/logo.png';

export default function PublicNavbar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--glass-border)',
        padding: '1rem 2rem'
      }}
    >
      <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo Section */}
        <Link to="/" style={{ display: 'flex', alignItems: 'left', gap: '0rem', color: 'var(--text-primary)' }}>
          {/* <div style={{
            width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'
          }}> */}
            <img src={logo} alt="Logo" />
          {/* </div> */}

        </Link>

        {/* Navigation Links (Desktop) */}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', gap: '2rem' }} className="hidden-mobile">
          <a href="/#home" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Home</a>
          <a href="/#courses" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Courses</a>
          <a href="/#about" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>About Us</a>
          <a href="/#faqs" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>FAQs</a>
          <a href="/#support" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Support</a>
          <a href="/#contact" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Contact</a>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/login" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Log In</Link>
          <Link to="/signup" style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            fontWeight: 600
          }}>
            Sign Up
          </Link>

        </div>
      </div>
    </nav>
  );
}

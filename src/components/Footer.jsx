import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      padding: '4rem 2rem 2rem',
      borderTop: '1px solid var(--glass-border)',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

        {/* Brand Section */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            <Brain size={28} color="var(--accent-primary)" />
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>EduSpark AI</div>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Empowering students worldwide with AI-accelerated learning, comprehensive subject catalogs, and adaptive task tracking.
          </p>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', fontSize: '0.875rem', color: 'inherit', textDecoration: 'none' }}>YouTube</a>
          </div>
        </div>

        {/* Trending Categories */}
        <div>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Top Learning Categories</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
            <li><Link to="/signup" style={{ color: 'inherit' }}>Computer Science</Link></li>
            <li><Link to="/signup" style={{ color: 'inherit' }}>Cloud Computing</Link></li>
            <li><Link to="/signup" style={{ color: 'inherit' }}>Data Science & AI</Link></li>
            <li><Link to="/signup" style={{ color: 'inherit' }}>Cyber Security</Link></li>
            <li><Link to="/signup" style={{ color: 'inherit' }}>Project Management</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Resources & Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
            <li><a href="/#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
            {/* <li><Link to="/careers" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</Link></li> */}
            {/* <li><Link to="/ai-summarizer" style={{ color: 'inherit', textDecoration: 'none' }}>AI Summarizer Tool</Link></li>
            <li><Link to="/community" style={{ color: 'inherit', textDecoration: 'none' }}>Community Forums</Link></li> */}
            <li><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Support</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Subscribe</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Get the latest updates on new subjects, features, and AI updates right in your inbox!
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Your Email"
              style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)' }}
            />
            <button style={{ backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
              Join
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} EduSpark AI Learning Platform. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
          <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/sitemap" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

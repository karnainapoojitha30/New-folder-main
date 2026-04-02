import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, currentUser, userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (userRole === 'admin') navigate('/admin', { replace: true });
      else navigate('/student', { replace: true });
    }
  }, [currentUser, userRole, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      // Wait a moment for context to fetch role, then navigate based on role or let useEffect handle it natively.
      const isAdminCheck = email.includes('admin');
      navigate(isAdminCheck ? '/admin' : '/student');
    } catch {
      setError('Failed to log in. Please check your credentials.');
    }
    setLoading(false);
  }

  return (
    <>
          <PublicNavbar />
          <div className="flex items-center justify-center min-h-screen" style={{ width: '100vw', padding: '13rem' }}>
        <div className="glass-panel" style={{ padding: '2.5rem', width: '100%', maxWidth: '500px' }}>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div style={{ backgroundColor: 'var(--accent-primary)', padding: '1rem', borderRadius: '50%' }}>
              <LogIn size={28} color="white" />
            </div>
            <h2 style={{ fontSize: '1.5rem', textAlign: 'center' }}>Welcome Back</h2>
            <p style={{ color: 'var(--text-muted)' }}>Login to access your learning portal.</p>
          </div>

          {error && <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--accent-danger)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Account</label>
              <input
                type="email"
                placeholder="student@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '1rem',
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </form>

          <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            Don&apos;t have an account? <Link to="/signup" style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Sign up</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

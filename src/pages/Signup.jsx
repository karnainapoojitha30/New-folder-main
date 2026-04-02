import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, currentUser, userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (userRole === 'admin') navigate('/admin', { replace: true });
      else navigate('/student', { replace: true });
    }
  }, [currentUser, userRole, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, role);
      navigate(role === 'admin' ? '/admin' : '/student');
    } catch (err) {
      setError('Failed to create an account: ' + err.message);
    }
    setLoading(false);
  }

  return (
    <><PublicNavbar />
    <div className="flex items-center justify-center min-h-screen" style={{ width: '100vw', padding: '6rem' }}>
      <div className="glass-panel" style={{ padding: '2.5rem', width: '100%', maxWidth: '600px' }}>
        <div className="flex flex-col items-center gap-4 mb-6">
          <div style={{ backgroundColor: 'var(--accent-primary)', padding: '1rem', borderRadius: '50%' }}>
            <UserPlus size={28} color="white" />
          </div>
          <h2 style={{ fontSize: '1.5rem', textAlign: 'center' }}>Create Account</h2>
          <p style={{ color: 'var(--text-muted)' }}>Join our interactive learning platform.</p>
        </div>

        {error && <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--accent-danger)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Account</label>
            <input 
              type="email" 
              placeholder="student@example.com" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={passwordConfirm} 
              onChange={(e) => setPasswordConfirm(e.target.value)} 
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="admin">Administrator / Teacher</option>
            </select>
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
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Log In</Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

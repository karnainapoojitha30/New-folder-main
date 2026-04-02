import { useState, useEffect } from 'react';
import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { BookOpen, ChevronRight, Video, FileText } from 'lucide-react';

export default function StudentSubjects() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    if (!db) {
      setSubjects([
        { id: '1', title: 'Computer Science 101', description: 'Intro to Programming' },
        { id: '2', title: 'Data Structures', description: 'Advanced algorithms' }
      ]);
      return;
    }
    // real fetch
    try {
      const snap = await getDocs(collection(db, "subjects"));
      setSubjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My Learning</h1>
        <p style={{ color: 'var(--text-muted)' }}>Browse your available subjects and continue learning.</p>
      </header>

      <div className="dashboard-grid">
        {subjects.map((sub, idx) => (
          <div key={sub.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-tertiary)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
              <BookOpen color="var(--accent-primary)" size={24} />
            </div>
            
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{sub.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', flex: 1 }}>{sub.description}</p>
            
            {/* Progress bar mock */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>
                <span>Progress</span>
                <span>{30 + (idx * 20)}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${30 + (idx * 20)}%`, backgroundColor: 'var(--accent-success)', borderRadius: '50px' }}></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: 'auto' }}>
               <button style={{ flex: 1, padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', fontSize: '0.875rem' }}>
                 <Video size={16} /> Watch
               </button>
               <button style={{ flex: 1, padding: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', fontSize: '0.875rem' }}>
                 <FileText size={16} /> Read
               </button>
               <button style={{ width: '40px', padding: '0.5rem', display: 'flex', justifySelf: 'flex-end', justifyContent: 'center', alignItems: 'center', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--accent-primary)', color: 'white' }}>
                 <ChevronRight size={18} />
               </button>
            </div>
          </div>
        ))}
        {subjects.length === 0 && (
          <div style={{ color: 'var(--text-muted)', gridColumn: 'span 3', textAlign: 'center', marginTop: '2rem' }}>
            No subjects assigned yet.
          </div>
        )}
      </div>
    </div>
  );
}

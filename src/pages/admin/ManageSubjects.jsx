import { useState, useEffect } from 'react';
import { db } from '../../services/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Plus, Trash2, Edit } from 'lucide-react';

export default function ManageSubjects() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    if (!db) {
      // Mock data for UI demonstration
      setSubjects([
        { id: '1', title: 'Computer Science 101', description: 'Intro to Programming' },
        { id: '2', title: 'Data Structures', description: 'Advanced algorithms' }
      ]);
      return;
    }
    try {
      const querySnapshot = await getDocs(collection(db, "subjects"));
      const subs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSubjects(subs);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleAddSubject(e) {
    e.preventDefault();
    if (!newSubject.trim()) return;
    
    setLoading(true);
    if (!db) {
      setSubjects([...subjects, { id: Date.now().toString(), title: newSubject, description }]);
      setNewSubject('');
      setDescription('');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "subjects"), {
        title: newSubject,
        description: description,
        createdAt: new Date()
      });
      setNewSubject('');
      setDescription('');
      fetchSubjects();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!db) {
      setSubjects(subjects.filter(s => s.id !== id));
      return;
    }
    try {
      await deleteDoc(doc(db, "subjects", id));
      fetchSubjects();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Manage Subjects</h1>
        <p style={{ color: 'var(--text-muted)' }}>Create and organize learning subjects for students.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* ADD FORM */}
        <div className="glass-panel" style={{ padding: '1.5rem', height: 'fit-content' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Add New Subject</h2>
          <form onSubmit={handleAddSubject} className="flex flex-col gap-4">
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Subject Title</label>
              <input 
                type="text" 
                placeholder="e.g. Operating Systems" 
                value={newSubject}
                onChange={e => setNewSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Description</label>
              <textarea 
                placeholder="Brief description of the subject..." 
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={3}
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Plus size={18} /> {loading ? 'Adding...' : 'Add Subject'}
            </button>
          </form>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-4">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Current Subjects</h2>
          {subjects.map(sub => (
            <div key={sub.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>{sub.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{sub.description}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
                  <Edit size={18} />
                </button>
                <button 
                  onClick={() => handleDelete(sub.id)}
                  style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-danger)' }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          {subjects.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>No subjects found. Add one to get started.</div>
          )}
        </div>
      </div>
    </div>
  );
}

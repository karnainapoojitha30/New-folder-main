import { BookOpen, ChevronRight, Video, FileText, Play, Trash2 } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

export default function StudentSubjects() {
  const { enrolledCourses, removeCourse } = useLearning();

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My Learning</h1>
        <p style={{ color: 'var(--text-muted)' }}>Browse your available subjects and continue learning.</p>
      </header>

      <div className="dashboard-grid">
        {enrolledCourses.map((course) => {
          const CourseIcon = course.icon || BookOpen;
          const courseColor = course.color || 'var(--accent-primary)';
          
          return (
            <div key={course.id} className="glass-panel hover-scale" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', backgroundColor: `${courseColor}15`, display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${courseColor}30` }}>
                  <CourseIcon color={courseColor} size={28} />
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  {course.progress > 0 && (
                    <div style={{ padding: '0.35rem 0.75rem', backgroundColor: `${courseColor}10`, color: courseColor, borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, border: `1px solid ${courseColor}30` }}>
                      Active
                    </div>
                  )}
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeCourse(course.id); }}
                    style={{ background: 'rgba(239, 68, 68, 0.1)', border: 'none', color: '#ef4444', padding: '0.5rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Remove from My Learning"
                    className="hover-brightness"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: 700 }}>{course.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                Continue your learning journey in this {course.title} track. Access all modules and resources below.
              </p>
              
              {/* Progress Bar */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  <span style={{ fontWeight: 600 }}>Couse Completion</span>
                  <span style={{ color: courseColor, fontWeight: 700 }}>{course.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${course.progress}%`, backgroundColor: courseColor, borderRadius: '50px', transition: 'width 1s ease-in-out' }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                 <button className="hover-brightness" style={{ flex: 1, padding: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
                   <Video size={18} /> Watch
                 </button>
                 <button className="hover-brightness" style={{ flex: 1, padding: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
                   <FileText size={18} /> Read
                 </button>
                 <button className="hover-brightness" style={{ width: '48px', padding: '0.75rem', display: 'flex', justifySelf: 'flex-end', justifyContent: 'center', alignItems: 'center', borderRadius: 'var(--radius-md)', backgroundColor: courseColor, color: 'white', border: 'none', cursor: 'pointer', transition: 'var(--transition)' }}>
                   <Play size={20} fill="#fff" />
                 </button>
              </div>
            </div>
          );
        })}
        {enrolledCourses.length === 0 && (
          <div className="glass-panel" style={{ color: 'var(--text-muted)', gridColumn: 'span 3', textAlign: 'center', padding: '4rem', borderRadius: 'var(--radius-lg)' }}>
            <BookOpen size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No subjects assigned yet</h3>
            <p>Start a course from the dashboard or category pages to see it here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

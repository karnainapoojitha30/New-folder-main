import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Heart, Bookmark, Search, Inbox, ChevronRight } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';
import { useLearning } from '../../context/LearningContext';
import { categories } from '../../utils/mockData';

export default function StudentBookmarks() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const { enrollCourse, isEnrolled } = useLearning();
  const navigate = useNavigate();

  const getCategoryColor = (courseTitle) => {
    // Attempt to guess category based on course title or just default
    // In a real app, the course object would have a categoryId
    return 'var(--accent-primary)';
  };

  const getCategoryIcon = (courseTitle) => {
    return Bookmark;
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>My Bookmarks</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          You have {bookmarks.length} course{bookmarks.length !== 1 ? 's' : ''} saved for later.
        </p>
      </header>

      {bookmarks.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {bookmarks.map((course) => {
            const courseColor = course.color || 'var(--accent-primary)';
            const CourseIcon = course.icon || Bookmark;

            return (
              <div 
                key={course.id} 
                className="glass-panel" 
                style={{ 
                  padding: 0, 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  cursor: 'pointer', 
                  transition: 'transform 0.2s', 
                  borderRadius: 'var(--radius-lg)' 
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} 
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Course Thumbnail */}
                <div style={{ width: '100%', height: '180px', background: `linear-gradient(135deg, ${courseColor}40, ${courseColor}15)`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 'var(--radius-full)', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
                    <Play size={12} fill="#fff" /> {course.duration}
                  </div>
                  
                  {/* Unbookmark button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleBookmark(course); }}
                    style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)' }}
                    title="Remove from bookmarks"
                  >
                    <Heart size={20} fill="var(--accent-primary)" color="var(--accent-primary)" />
                  </button>

                  <CourseIcon size={72} color={courseColor} style={{ opacity: 0.8 }} />
                </div>
                
                {/* Course Info */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '0.35rem 0.85rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Saved Course
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.3, fontWeight: 700 }}>{course.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.6 }}>Continue where you left off in this track.</p>
                  
                  <button 
                     className="hover-brightness" 
                     onClick={(e) => {
                       e.stopPropagation();
                       if (!isEnrolled(course.id)) {
                         enrollCourse(course);
                       }
                       navigate('/student/subjects');
                     }}
                     style={{ marginTop: 'auto', width: '100%', padding: '1rem', backgroundColor: courseColor, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '1.05rem' }}>
                    {isEnrolled(course.id) ? 'Continue Course' : 'Start Course'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: '6rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            <Bookmark size={50} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', fontWeight: 700 }}>Your bookmark list is empty</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '450px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Explore the course catalog and save your favorites to access them quickly from here.
            </p>
          </div>
          <button 
            onClick={() => navigate('/student')}
            style={{ 
              backgroundColor: 'var(--accent-primary)', 
              color: '#fff', 
              padding: '1rem 2.5rem', 
              border: 'none', 
              borderRadius: 'var(--radius-md)', 
              fontWeight: 700, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              transition: 'var(--transition)'
            }}
            className="hover-brightness"
          >
            Explore Courses <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

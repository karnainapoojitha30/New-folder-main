import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, ChevronLeft, Search, Inbox, Heart } from 'lucide-react';
import { getCategorySpecificCourses, categories } from '../../utils/mockData';
import { useBookmarks } from '../../context/BookmarkContext';
import { useLearning } from '../../context/LearningContext';

export default function StudentCategoryCourses() {
  const { categoryTitle } = useParams();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLevel, setActiveLevel] = useState('All');
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { enrollCourse, isEnrolled } = useLearning();

  // Find the category info (for colors, icons etc)
  const decodedTitle = decodeURIComponent(categoryTitle);
  const categoryInfo = categories.find(c => c.title === decodedTitle) || categories[0];
  
  // Generate courses using the helper
  const categoryCourses = useMemo(() => getCategorySpecificCourses({ title: decodedTitle }), [decodedTitle]);

  // Filter courses based on search query and active level
  const filteredCourses = useMemo(() => {
    return categoryCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel = activeLevel === 'All' || course.level === activeLevel;
      return matchesSearch && matchesLevel;
    });
  }, [categoryCourses, searchQuery, activeLevel]);

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      {/* Header Banner */}
      <div style={{
          width: '100%', height: '220px', 
          background: `linear-gradient(135deg, ${categoryInfo.color}30, ${categoryInfo.color}10)`,
          borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', 
          flexDirection: 'column', position: 'relative', marginBottom: '3rem',
          border: `1px solid ${categoryInfo.color}30`
      }}>
         <button onClick={() => navigate(-1)} style={{
             position: 'absolute', top: '1.5rem', left: '1.5rem',
             backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%',
             width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center',
             cursor: 'pointer', backdropFilter: 'blur(4px)',
             color: 'var(--text-primary)'
         }}>
            <ChevronLeft size={24} />
         </button>
         
         <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', gap: '2rem' }}>
            <div style={{
                width: '100px', height: '100px', borderRadius: 'var(--radius-lg)', 
                backgroundColor: categoryInfo.color, display: 'flex', 
                justifyContent: 'center', alignItems: 'center', color: '#fff'
            }}>
                <categoryInfo.icon size={50} />
            </div>
            <div style={{ paddingBottom: '0.5rem' }}>
                <h1 style={{ fontSize: '2.5rem', margin: 0 }}>{decodedTitle}</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.25rem' }}>{categoryCourses.length} Premium Courses Available</p>
            </div>
         </div>
      </div>
      
      {/* Filters and Search Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
           <div style={{ display: 'flex', gap: '1rem' }}>
              {['All', 'Beginner', 'Advanced'].map(level => (
                <button 
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className="glass-panel" 
                  style={{ 
                    padding: '0.6rem 1.8rem', 
                    fontWeight: 600, 
                    color: activeLevel === level ? (activeLevel === 'All' ? 'var(--accent-primary)' : categoryInfo.color) : 'var(--text-muted)', 
                    borderColor: activeLevel === level ? (activeLevel === 'All' ? 'var(--accent-primary)' : categoryInfo.color) : 'var(--glass-border)',
                    backgroundColor: activeLevel === level ? 'var(--bg-tertiary)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  {level}
                </button>
              ))}
           </div>
           <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.25rem', width: '350px', borderRadius: 'var(--radius-md)' }}>
               <Search size={20} color="var(--text-muted)" />
               <input 
                 type="text" 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 placeholder={`Search in ${decodedTitle}...`} 
                 style={{ background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', width: '100%', fontSize: '1rem' }} 
               />
           </div>
        </div>

        {activeLevel !== 'All' && (
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Showing <strong>{filteredCourses.length}</strong> {activeLevel.toLowerCase()} level courses
          </div>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredCourses.map((course) => (
              <div key={course.id} className="glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s', borderRadius: 'var(--radius-lg)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  {/* Course Thumbnail */}
                  <div style={{ width: '100%', height: '180px', background: `linear-gradient(135deg, ${categoryInfo.color}40, ${categoryInfo.color}15)`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 'var(--radius-full)', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
                        <Play size={12} fill="#fff" /> {course.duration}
                    </div>

                    {/* Bookmark icon toggle */}
                    <button 
                       onClick={(e) => { e.stopPropagation(); toggleBookmark(course); }}
                       style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 10 }}
                    >
                      <Heart 
                        size={20} 
                        fill={isBookmarked(course.id) ? "var(--accent-primary)" : "none"} 
                        color={isBookmarked(course.id) ? "var(--accent-primary)" : "var(--text-primary)"} 
                        style={{ transition: 'all 0.3s' }}
                      />
                    </button>

                    <div style={{ position: 'absolute', top: '3.5rem', left: '1rem', backgroundColor: `${categoryInfo.color}20`, color: categoryInfo.color, borderRadius: 'var(--radius-full)', padding: '0.25rem 0.75rem', fontSize: '0.7rem', fontWeight: 'bold', border: `1px solid ${categoryInfo.color}40`, backdropFilter: 'blur(4px)' }}>
                        {course.level.toUpperCase()}
                    </div>
                    <categoryInfo.icon size={72} color={categoryInfo.color} style={{ opacity: 0.8 }} />
                  </div>
                  
                  {/* Course Info */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '0.35rem 0.85rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        {decodedTitle} Track
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: 1.3, fontWeight: 700 }}>{course.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.6 }}>Comprehensive training module tailored for the industry standard toolchain in this track.</p>
                    
                    <button 
                      className="hover-brightness" 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isEnrolled(course.id)) {
                          enrollCourse({
                             ...course,
                             color: categoryInfo.color,
                             icon: categoryInfo.icon
                          });
                        }
                        navigate('/student/subjects'); // Redirect to subjects to see the new course
                      }}
                      style={{ marginTop: 'auto', width: '100%', padding: '1rem', backgroundColor: categoryInfo.color, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '1.05rem' }}>
                      {isEnrolled(course.id) ? 'Continue Course' : 'Start Course'}
                    </button>
                  </div>
              </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel" style={{ padding: '5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
           <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)' }}>
              <Inbox size={40} />
           </div>
           <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No courses found</h3>
              <p style={{ color: 'var(--text-muted)' }}>We couldn't find any courses matching your current search or filter criteria.</p>
           </div>
           <button 
             onClick={() => { setSearchQuery(''); setActiveLevel('All'); }}
             style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', padding: '0.75rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}
           >
             Clear all filters
           </button>
        </div>
      )}
    </div>
  );
}

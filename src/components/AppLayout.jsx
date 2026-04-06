import { Routes, Route, Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Users, LogOut, BookOpen, Brain, Award, Settings, Play, Clock, Code, Palette, Briefcase, LineChart, ChevronRight, ChevronLeft, Globe, Shield, Database, Smartphone, Terminal, Monitor, Sparkles, Bookmark, Heart, Trash2 } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';
import { useLearning } from '../context/LearningContext';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { categories, careerPaths, getCategorySpecificCourses } from '../utils/mockData';

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const banners = [
    {
      id: 1,
      tag: "NEW COURSE",
      icon: Sparkles,
      title: "Master AI Driven Development",
      desc: "Learn how to integrate LLMs into your applications with our comprehensive new interactive guide.",
      btnText: "Enroll Now",
      bgClass: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.4))",
      borderColor: "rgba(59, 130, 246, 0.3)",
      tagBg: "var(--accent-primary)",
      heroIcon: Brain,
      heroColor: "var(--accent-primary)"
    },
    {
      id: 2,
      tag: "CERTIFICATION QUICK TRACK",
      icon: Award,
      title: "Google Cloud Architecture",
      desc: "Speed up your path to becoming a certified cloud architect with our exclusive practice environments.",
      btnText: "View Details",
      bgClass: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.4))",
      borderColor: "rgba(16, 185, 129, 0.3)",
      tagBg: "var(--accent-success)",
      heroIcon: Globe,
      heroColor: "var(--accent-success)"
    },
    {
      id: 3,
      tag: "AI WORKSHOP",
      icon: Code,
      title: "Build Your Own AI Agents",
      desc: "Deep dive into building autonomous agents using Python and LangChain. Hands-on projects included.",
      btnText: "Start Building",
      bgClass: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(109, 40, 217, 0.4))",
      borderColor: "rgba(139, 92, 246, 0.3)",
      tagBg: "#8b5cf6",
      heroIcon: Terminal,
      heroColor: "#8b5cf6"
    },
    {
      id: 4,
      tag: "TRENDING",
      icon: LineChart,
      title: "Data Science with AI",
      desc: "Master data analysis pipelines enriched by artificial intelligence. From pandas to neural networks.",
      btnText: "Explore Track",
      bgClass: "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.4))",
      borderColor: "rgba(245, 158, 11, 0.3)",
      tagBg: "var(--accent-warning)",
      heroIcon: Database,
      heroColor: "var(--accent-warning)"
    }
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startTimer(); 
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    startTimer();
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', width: '100%' }}>
       {/* Slides */}
       <div style={{ display: 'flex', transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)', transform: `translateX(-${currentIndex * 100}%)`, width: '100%' }}>
          {banners.map((banner) => (
             <div key={banner.id} className="glass-panel" style={{ flexShrink: 0, width: '100%', padding: '2.5rem 3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: banner.bgClass, border: `1px solid ${banner.borderColor}`, borderRadius: 'var(--radius-lg)' }}>
               <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: banner.tagBg, color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem' }}><banner.icon size={14} /> {banner.tag}</div>
                  <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>{banner.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>{banner.desc}</p>
                  <button className="hover-brightness" style={{ backgroundColor: '#fff', color: 'var(--bg-primary)', padding: '0.75rem 1.75rem', borderRadius: 'var(--radius-md)', fontWeight: '600', transition: 'var(--transition)', cursor: 'pointer', border: 'none' }}>{banner.btnText}</button>
               </div>
               <div className="hidden-mobile" style={{ width: '180px', height: '180px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.9, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                  <banner.heroIcon size={90} color={banner.heroColor} />
               </div>
            </div>
          ))}
       </div>

       {/* Controls */}
       <button onClick={prevSlide} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}>
         <ChevronLeft size={24} />
       </button>
       <button onClick={nextSlide} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}>
         <ChevronRight size={24} />
       </button>

       {/* Dots */}
       <div style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
          {banners.map((_, idx) => (
             <div key={idx} onClick={() => goToSlide(idx)} style={{ width: currentIndex === idx ? '24px' : '8px', height: '8px', borderRadius: '4px', backgroundColor: currentIndex === idx ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s ease', cursor: 'pointer' }} />
          ))}
       </div>
    </div>
  );
};

const MultiItemCarousel = ({ children }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth - 20) {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => scrollRight(), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
       <button onClick={scrollLeft} style={{ position: 'absolute', left: '-1rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--glass-border)', cursor: 'pointer', zIndex: 10, boxShadow: 'var(--glass-shadow)' }}>
         <ChevronLeft size={20} />
       </button>
       <button onClick={scrollRight} style={{ position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid var(--glass-border)', cursor: 'pointer', zIndex: 10, boxShadow: 'var(--glass-shadow)' }}>
         <ChevronRight size={20} />
       </button>
       
       <div ref={containerRef} className="carousel-container" style={{ margin: 0, paddingLeft: 0, width: '100%' }}>
          {children}
       </div>
    </div>
  );
};

// Placeholders for views
const ComingSoon = ({ title }) => (
  <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
    <h2 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>{title}</h2>
    <p style={{ color: 'var(--text-muted)' }}>Module is currently under development.</p>
  </div>
);



const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
    cursor: 'pointer', borderRadius: 'var(--radius-md)', 
    backgroundColor: active ? 'var(--bg-tertiary)' : 'transparent',
    color: active ? 'var(--text-primary)' : 'var(--text-muted)',
    transition: 'var(--transition)'
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
  onMouseLeave={(e) => !active && (e.currentTarget.style.backgroundColor = 'transparent')}
  onClick={onClick}
  >
    <Icon size={20} color={active ? 'var(--accent-primary)' : 'currentColor'} />
    <span style={{ fontWeight: 500 }}>{label}</span>
  </div>
);

export function AppLayout() {
  const { currentUser, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const isAdmin = userRole === 'admin';
  const isActive = (path) => location.pathname === path;

  return (
    <div className="app-container" style={{ width: '100vw' }}>
      {/* Sidebar Navigation */}
      <aside className="glass-panel" style={{ 
        width: '280px', 
        height: '100vh', 
        borderRight: '1px solid var(--glass-border)',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        borderTop: 'none', borderBottom: 'none', borderLeft: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <div style={{ 
            width: '40px', height: '40px', borderRadius: 'var(--radius-md)', 
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff'
          }}>
            <Brain size={24} />
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
            EduSpark AI
          </div>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>Main</div>
          
          <SidebarItem icon={LayoutDashboard} label="Dashboard" path={isAdmin ? "/admin" : "/student"} active={isActive(isAdmin ? "/admin" : "/student")} onClick={() => navigate(isAdmin ? "/admin" : "/student")} />
          {!isAdmin && <SidebarItem icon={Bookmark} label="Bookmarks" path="/student/bookmarks" active={isActive("/student/bookmarks")} onClick={() => navigate("/student/bookmarks")} />}
          <SidebarItem icon={BookOpen} label={isAdmin ? "Manage Subjects" : "My Learning"} path={isAdmin ? "/admin/subjects" : "/student/subjects"} active={isActive(isAdmin ? "/admin/subjects" : "/student/subjects")} onClick={() => navigate(isAdmin ? "/admin/subjects" : "/student/subjects")} />
          <SidebarItem icon={Brain} label="AI Summarizer" path={isAdmin ? "/admin/ai-tools" : "/student/ai-summary"} active={isActive(isAdmin ? "/admin/ai-tools" : "/student/ai-summary")} onClick={() => navigate(isAdmin ? "/admin/ai-tools" : "/student/ai-summary")} />
          
          {isAdmin ? (
            <>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Administration</div>
              <SidebarItem icon={Users} label="User Management" path="/admin/users" active={isActive("/admin/users")} onClick={() => navigate("/admin/users")} />
              <SidebarItem icon={Settings} label="System Configuration" path="/admin/settings" active={isActive("/admin/settings")} onClick={() => navigate("/admin/settings")} />
            </>
          ) : (
            <>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Progress</div>
              <SidebarItem icon={Award} label="Achievements" path="/student/achievements" active={isActive("/student/achievements")} onClick={() => navigate("/student/achievements")} />
            </>
          )}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontWeight: 600 }}>{currentUser.email.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{currentUser.email.split('@')[0]}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{isAdmin ? 'Administrator' : 'Student'}</div>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            style={{ 
              width: '100%', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-danger)', borderRadius: 'var(--radius-md)', fontWeight: 600
            }}
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export function StudentDashboard() {
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isRoadmapView, setIsRoadmapView] = useState(false);
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { enrolledCourses, removeCourse } = useLearning();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mainContainer = document.querySelector('.main-content');
    if (selectedPath || selectedCategory) {
      if (mainContainer) mainContainer.style.overflowY = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      if (mainContainer) mainContainer.style.overflowY = 'auto';
      document.body.style.overflow = '';
    }
    return () => {
      const cleanupContainer = document.querySelector('.main-content');
      if (cleanupContainer) cleanupContainer.style.overflowY = 'auto';
      document.body.style.overflow = '';
    };
  }, [selectedPath, selectedCategory]);

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h > 0 ? h + 'h ' : ''}${m}m ${s}s`;
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Welcome back!</h1>
          <p style={{ color: 'var(--text-muted)' }}>Ready to continue your learning journey?</p>
        </div>
        
        {/* Dynamic Learning Time Tracker */}
        <div className="glass-panel" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: 'var(--radius-full)' }}>
          <Clock size={20} color="var(--accent-primary)" />
          <div>
             <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Session Time</div>
             <div style={{ fontWeight: '700', minWidth: '80px' }}>{formatTime(sessionSeconds)}</div>
          </div>
        </div>
      </header>
      
      {/* Promotional Banners */}
      <section>
         <BannerCarousel />
      </section>

      {/* Recommended Courses Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem' }}>Continue Learning</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>View All <ChevronRight size={16} /></span>
        </div>
        
        <MultiItemCarousel>
          {enrolledCourses.map(course => (
            <div key={course.id} className="carousel-item glass-panel" style={{ width: '300px', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
               {/* Subject Banner Image Area */}
               <div style={{ width: '100%', height: '130px', background: `linear-gradient(135deg, ${course.color}30, ${course.color}10)`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 'var(--radius-full)', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
                     <Play size={12} fill="#fff" /> {course.duration}
                  </div>
                  
                  {/* Remove course button */}
                  <button 
                     onClick={(e) => { e.stopPropagation(); removeCourse(course.id); }}
                     style={{ position: 'absolute', top: '3.5rem', right: '1rem', background: 'rgba(239, 68, 68, 0.2)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)', color: '#ef4444' }}
                     title="Remove from My Learning"
                  >
                    <Trash2 size={16} />
                  </button>
                  
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

                  <course.icon size={56} color={course.color} style={{ opacity: 0.9, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
               </div>
               
               {/* Card Content Area */}
               <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{course.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{course.progress > 0 ? 'Continue learning' : 'Start course'}</p>
                  
                  <div style={{ marginTop: 'auto' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                        <span>Progress</span>
                        <span style={{ fontWeight: '600', color: course.progress > 0 ? course.color : 'var(--text-muted)' }}>{course.progress}%</span>
                     </div>
                     <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50px', overflow: 'hidden' }}>
                       <div style={{ height: '100%', width: `${course.progress}%`, backgroundColor: course.color, borderRadius: '50px' }}></div>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </MultiItemCarousel>
      </section>

      {/* Explore Categories Carousel */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Explore Categories</h2>
        <MultiItemCarousel>
          {categories.map((cat, i) => (
             <div key={i} onClick={() => setSelectedCategory(cat)} className="carousel-item glass-panel" style={{ width: '250px', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                {/* Banner Header Image Area */}
                <div style={{ width: '100%', height: '110px', background: `linear-gradient(135deg, ${cat.color}30, ${cat.color}10)`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
                   <cat.icon size={48} color={cat.color} style={{ opacity: 0.9, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
                </div>
                
                {/* Card Content */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                   <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.25rem', width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cat.title}</div>
                   <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-tertiary)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', marginTop: '0.5rem' }}>{cat.count} Courses</div>
                </div>
             </div>
          ))}
        </MultiItemCarousel>
      </section>

      {/* Career Paths Carousel */}
      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Career Paths</h2>
        <MultiItemCarousel>
          {careerPaths.map((path, i) => (
             <div key={i} onClick={() => setSelectedPath(path)} className="carousel-item glass-panel" style={{ width: '280px', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                {/* Banner Header Area */}
                <div style={{ width: '100%', height: '120px', background: `linear-gradient(135deg, ${path.color}30, ${path.color}10)`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
                   <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 'var(--radius-md)', padding: '0.25rem 0.5rem', color: '#fff', fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', backdropFilter: 'blur(4px)' }}>
                      {path.role} Group
                   </div>
                   <path.icon size={50} color={path.color} style={{ opacity: 0.9, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
                </div>
                
                {/* Card Content Area */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                   <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{path.title}</h3>
                   
                   <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                      <Briefcase size={16} color="var(--accent-success)" /> 
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{path.jobs}</span>
                   </div>
                </div>
             </div>
          ))}
        </MultiItemCarousel>
      </section>

      {/* Career Path Details Modal */}
      {selectedPath && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }} onClick={() => { setSelectedPath(null); setIsRoadmapView(false); }}>
           <div className="glass-panel animate-fade-in" style={{ width: isRoadmapView ? '70vw' : '80vw', height: '80vh', overflow: 'hidden', padding: 0, display: 'flex', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} onClick={e => e.stopPropagation()}>
              
              {!isRoadmapView ? (
                <>
                  {/* Modal Left / Banner */}
                  <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: `linear-gradient(135deg, ${selectedPath.color}40, ${selectedPath.color}10)`, borderRight: '1px solid var(--glass-border)', padding: '3rem' }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: `${selectedPath.color}20`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', border: `1px solid ${selectedPath.color}40` }}>
                      <selectedPath.icon size={60} color={selectedPath.color} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', whiteSpace: 'normal', padding: '0 1rem' }}>{selectedPath.title}</h2>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      <span>{selectedPath.role} Group</span>
                      <span>•</span>
                      <span>{selectedPath.jobs}</span>
                    </div>
                  </div>
                  
                  {/* Modal Right / Content */}
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '4rem', overflowY: 'auto' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>About this Path</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.1rem' }}>{selectedPath.description}</p>
                    
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}>
                      <div className="glass-panel" style={{ flex: 1, padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
                          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Avg. Salary Range</div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: selectedPath.color }}>{selectedPath.salary}</div>
                      </div>
                      <div className="glass-panel" style={{ flex: 1, padding: '1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
                          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Required Effort</div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>6-8 Months</div>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Key Skills Required</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: 'auto' }}>
                      {selectedPath.skills.map((skill, i) => (
                          <span key={i} style={{ padding: '0.5rem 1rem', backgroundColor: `${selectedPath.color}20`, color: selectedPath.color, border: `1px solid ${selectedPath.color}40`, borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600 }}>{skill}</span>
                      ))}
                    </div>
                    
                    <button className="hover-brightness" onClick={() => setIsRoadmapView(true)} style={{ width: '100%', padding: '1.25rem', backgroundColor: selectedPath.color, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', fontSize: '1.15rem', cursor: 'pointer', transition: 'var(--transition)', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                      <Play size={20} fill="#fff" /> Enroll in Career Track
                    </button>
                  </div>
                </>
              ) : (
                /* Roadmap View */
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
                    {/* Roadmap Header */}
                    <div style={{ padding: '2rem 3rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: `linear-gradient(to right, ${selectedPath.color}15, transparent)` }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: selectedPath.color, marginBottom: '0.25rem' }}>
                                <selectedPath.icon size={24} />
                                <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Career Roadmap</span>
                            </div>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{selectedPath.title}</h2>
                        </div>
                        <button 
                            onClick={() => setIsRoadmapView(false)}
                            style={{ padding: '0.75rem 1.25rem', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <ChevronLeft size={18} /> Back to Info
                        </button>
                    </div>

                    {/* Flowchart Area */}
                    <div style={{ flex: 1, padding: '3rem', overflowY: 'auto', position: 'relative' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                            {/* Vertical connecting line */}
                            <div style={{ position: 'absolute', left: '40px', top: '20px', bottom: '20px', width: '3px', backgroundColor: `${selectedPath.color}30`, borderRadius: '3px' }} />
                            
                            {/* Roadmap Steps */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                {selectedPath.roadmap.map((step, idx) => (
                                    <div key={idx} className="animate-fade-in" style={{ display: 'flex', gap: '2rem', position: 'relative', opacity: 0, animation: `fadeIn 0.5s ease forwards ${idx * 0.1}s` }}>
                                        {/* Step Circle/Icon */}
                                        <div style={{ width: '80px', height: '80px', flexShrink: 0, borderRadius: '50%', backgroundColor: idx === 0 ? selectedPath.color : 'var(--bg-tertiary)', border: `4px solid ${idx === 0 ? 'var(--bg-primary)' : `${selectedPath.color}30`}`, display: 'flex', justifyContent: 'center', alignItems: 'center', color: idx === 0 ? '#fff' : 'var(--text-primary)', zIndex: 2, boxShadow: idx === 0 ? `0 0 20px ${selectedPath.color}50` : 'none' }}>
                                            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{idx + 1}</span>
                                        </div>
                                        
                                        {/* Step Content */}
                                        <div className="glass-panel" style={{ flex: 1, padding: '1.5rem 2rem', backgroundColor: idx === 0 ? `${selectedPath.color}10` : 'var(--bg-tertiary)', borderColor: idx === 0 ? `${selectedPath.color}40` : 'var(--glass-border)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{step.title}</h4>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: selectedPath.color, backgroundColor: `${selectedPath.color}20`, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>{step.duration}</span>
                                            </div>
                                            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action */}
                    <div style={{ padding: '2rem 3rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                         <button className="hover-brightness" style={{ width: '100%', maxWidth: '400px', padding: '1rem', backgroundColor: selectedPath.color, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
                             Begin First Module
                         </button>
                    </div>
                </div>
              )}
              
              {/* Close Button */}
              <button onClick={() => { setSelectedPath(null); setIsRoadmapView(false); }} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)', zIndex: 10 }}>
                ✕
              </button>
           </div>
        </div>,
        document.body
      )}

      {/* Category Details Modal */}
      {selectedCategory && createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }} onClick={() => setSelectedCategory(null)}>
           <div className="glass-panel animate-fade-in" style={{ width: '60vw', maxWidth: '800px', maxHeight: '80vh', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} onClick={e => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div style={{ width: '100%', height: '160px', background: `linear-gradient(135deg, ${selectedCategory.color}40, ${selectedCategory.color}10)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
                 <selectedCategory.icon size={50} color={selectedCategory.color} style={{ opacity: 0.9, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))', marginBottom: '0.5rem' }} />
                 <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{selectedCategory.title}</h2>
                 <p style={{ color: 'var(--text-muted)' }}>{selectedCategory.count} Courses available</p>
              </div>
              
              {/* Modal Content */}
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '2.5rem', overflowY: 'auto' }}>
                 <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Popular inside {selectedCategory.title}</h3>
                 
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                   {getCategorySpecificCourses(selectedCategory).map(mockCourse => (
                     <div key={mockCourse.id} className="glass-panel" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: `${selectedCategory.color}20`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <selectedCategory.icon size={24} color={selectedCategory.color} />
                        </div>
                        <div>
                           <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{mockCourse.title}</div>
                           <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{mockCourse.duration} • <span style={{ color: 'var(--accent-primary)' }}>Beginner</span></div>
                        </div>
                     </div>
                   ))}
                 </div>

                 <button className="hover-brightness" onClick={() => {
                   setSelectedCategory(null);
                   navigate(`/student/category/${encodeURIComponent(selectedCategory.title)}`);
                 }} style={{ width: '100%', padding: '1rem', backgroundColor: selectedCategory.color, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', fontSize: '1.05rem', cursor: 'pointer', transition: 'var(--transition)', marginTop: 'auto' }}>
                   Browse all {selectedCategory.title} courses
                 </button>
              </div>
              
              {/* Close Button */}
              <button onClick={() => setSelectedCategory(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
                ✕
              </button>
           </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export function AdminDashboard() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage platform content, subjects, and users.</p>
      </header>
      
      <div className="dashboard-grid">
         <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Students</div>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>1,248</div>
         </div>
         <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-success)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Active Courses</div>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>45</div>
         </div>
         <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-warning)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>AI Interactions (Today)</div>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>342</div>
         </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ backgroundColor: 'var(--accent-primary)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>Create Subject</button>
          <button style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>Manage Users</button>
        </div>
      </div>
    </div>
  );
}

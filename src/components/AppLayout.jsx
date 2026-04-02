import { Routes, Route, Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Users, LogOut, BookOpen, Brain, Award, Settings, Play, Clock, Code, Palette, Briefcase, LineChart, ChevronRight, ChevronLeft, Globe, Shield, Database, Smartphone, Terminal, Monitor, Sparkles } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mainContainer = document.querySelector('.main-content');
    if (selectedPath) {
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
  }, [selectedPath]);

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h > 0 ? h + 'h ' : ''}${m}m ${s}s`;
  };

  const courses = [
    { id: 1, title: 'Advanced React', progress: 75, color: 'var(--accent-primary)', duration: '12h', icon: Code },
    { id: 2, title: 'Machine Learning Basics', progress: 30, color: 'var(--accent-success)', duration: '24h', icon: Brain },
    { id: 3, title: 'UI/UX Principles', progress: 10, color: 'var(--accent-warning)', duration: '8h', icon: Palette },
    { id: 4, title: 'Data Structures', progress: 0, color: '#8b5cf6', duration: '18h', icon: Database },
    { id: 5, title: 'Cloud Computing Intro', progress: 0, color: '#ec4899', duration: '10h', icon: Globe },
    { id: 6, title: 'Cybersecurity Fundamentals', progress: 0, color: '#f43f5e', duration: '15h', icon: Shield },
    { id: 7, title: 'Mobile App Dev with React Native', progress: 0, color: '#14b8a6', duration: '20h', icon: Smartphone },
    { id: 8, title: 'SQL & Database Architecture', progress: 0, color: '#f59e0b', duration: '11h', icon: Database },
    { id: 9, title: 'Blockchain & Web3', progress: 0, color: '#6366f1', duration: '14h', icon: Monitor },
    { id: 10, title: 'Ethical Hacking Intro', progress: 0, color: '#ef4444', duration: '9h', icon: Shield }
  ];

  const categories = [
    { title: 'Development', icon: Code, count: 124, color: 'var(--accent-primary)' },
    { title: 'Design', icon: Palette, count: 86, color: '#ec4899' },
    { title: 'Business', icon: Briefcase, count: 42, color: 'var(--accent-warning)' },
    { title: 'Data Science', icon: LineChart, count: 56, color: 'var(--accent-success)' },
    { title: 'Marketing', icon: Users, count: 34, color: '#ef4444' },
    { title: 'Security', icon: Shield, count: 28, color: '#f43f5e' },
    { title: 'Databases', icon: Database, count: 45, color: '#f59e0b' },
    { title: 'Mobile Apps', icon: Smartphone, count: 62, color: '#14b8a6' },
    { title: 'DevOps', icon: Terminal, count: 39, color: '#6366f1' },
    { title: 'IT & Hardware', icon: Monitor, count: 51, color: '#8b5cf6' }
  ];

  const careerPaths = [
    { title: 'Frontend Developer', role: 'Software', jobs: '10k+ Openings', icon: Code, color: 'var(--accent-primary)', salary: '$80k - $120k', description: 'Specialists in building user interfaces and web applications using HTML, CSS, JavaScript, and modern frameworks like React.', skills: ['React', 'JavaScript', 'CSS/SASS', 'Web Performance'] },
    { title: 'Data Scientist', role: 'Data', jobs: '5k+ Openings', icon: Brain, color: 'var(--accent-success)', salary: '$95k - $140k', description: 'Extract insights and knowledge from structured and unstructured data using algorithms and machine learning.', skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization'] },
    { title: 'Product Manager', role: 'Management', jobs: '8k+ Openings', icon: Briefcase, color: 'var(--accent-warning)', salary: '$100k - $150k', description: 'Guide the success of a product and lead the cross-functional team responsible for improving it.', skills: ['Agile', 'Product Roadmapping', 'User Research', 'Data Analysis'] },
    { title: 'UX Researcher', role: 'Design', jobs: '3k+ Openings', icon: Palette, color: '#ec4899', salary: '$85k - $130k', description: 'Systematically study target users to collect and analyze data that will help inform the product design process.', skills: ['Wireframing', 'User Testing', 'Figma', 'Prototyping'] },
    { title: 'Cloud Architect', role: 'Infrastructure', jobs: '4k+ Openings', icon: Globe, color: '#8b5cf6', salary: '$120k - $160k', description: 'Oversee a company\'s cloud computing strategy, including cloud adoption plans, cloud application design, and management.', skills: ['AWS / GCP', 'Docker', 'Kubernetes', 'Networking'] },
    { title: 'Cybersecurity Analyst', role: 'Security', jobs: '7k+ Openings', icon: Shield, color: '#f43f5e', salary: '$90k - $135k', description: 'Protect an organization\'s computer networks and systems by monitoring and responding to security breaches.', skills: ['Risk Assessment', 'Network Security', 'Cryptography', 'SIEM'] },
    { title: 'Mobile Developer', role: 'Software', jobs: '6k+ Openings', icon: Smartphone, color: '#14b8a6', salary: '$85k - $130k', description: 'Design and build applications for mobile devices running iOS and Android operating systems.', skills: ['React Native', 'Swift', 'Kotlin', 'Mobile UI'] },
    { title: 'Database Admin', role: 'Data', jobs: '2k+ Openings', icon: Database, color: '#f59e0b', salary: '$80k - $115k', description: 'Ensure that databases run efficiently and are secure from unauthorized access.', skills: ['SQL', 'Database Design', 'Performance Tuning', 'Backup Strategy'] },
    { title: 'DevOps Engineer', role: 'Infrastructure', jobs: '5k+ Openings', icon: Terminal, color: '#6366f1', salary: '$105k - $145k', description: 'Introduce processes, tools, and methodologies to balance needs throughout the software development life cycle.', skills: ['CI/CD', 'Jenkins', 'Terraform', 'Linux'] },
    { title: 'Digital Marketer', role: 'Marketing', jobs: '12k+ Openings', icon: LineChart, color: '#ef4444', salary: '$60k - $95k', description: 'Promote brands to connect with potential customers using the internet and other forms of digital communication.', skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media'] }
  ];

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
          {courses.map(course => (
            <div key={course.id} className="carousel-item glass-panel" style={{ width: '300px', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
               {/* Subject Banner Image Area */}
               <div style={{ width: '100%', height: '130px', background: `linear-gradient(135deg, ${course.color}30, ${course.color}10)`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid var(--glass-border)' }}>
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 'var(--radius-full)', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
                     <Play size={12} fill="#fff" /> {course.duration}
                  </div>
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
             <div key={i} className="carousel-item glass-panel" style={{ width: '250px', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
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
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }} onClick={() => setSelectedPath(null)}>
           <div className="glass-panel animate-fade-in" style={{ width: '80vw', height: '80vh', overflow: 'hidden', padding: 0, display: 'flex', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} onClick={e => e.stopPropagation()}>
              
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
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column', padding: '4rem', overflow: 'hidden' }}>
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
                 
                 <button className="hover-brightness" style={{ width: '100%', padding: '1.25rem', backgroundColor: selectedPath.color, color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', fontSize: '1.15rem', cursor: 'pointer', transition: 'var(--transition)', marginTop: '2rem' }}>
                   Enroll in Career Track
                 </button>
              </div>
              
              {/* Close Button */}
              <button onClick={() => setSelectedPath(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
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

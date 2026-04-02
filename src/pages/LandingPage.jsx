import { Link } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';
import { Search, Code2, Cloud, Database, Shield, Book, Star, Clock, Laptop, Activity, ChevronDown, Users, Target, Brain, Palette, TrendingUp, MessageSquare, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const bentoCategories = [
  { name: 'Artificial Intelligence', desc: 'Master machine learning and deep neural networks.', icon: Brain, path: '/signup', bg: 'linear-gradient(135deg, #4f46e5, #c026d3)', spanClass: 'bento-item-0' },
  { name: 'Cloud Computing', desc: 'Deploy on AWS, Azure, & GCP.', icon: Cloud, path: '/signup', bg: 'linear-gradient(135deg, #06b6d4, #2563eb)', spanClass: 'bento-item-1' },
  { name: 'Cyber Security', desc: 'Protect systems from modern threats. Learn ethical hacking and active defense.', icon: Shield, path: '/signup', bg: 'linear-gradient(135deg, #f59e0b, #ea580c)', spanClass: 'bento-item-2' },
  { name: 'Full Stack Web', desc: 'Build modern responsive apps.', icon: Code2, path: '/signup', bg: 'linear-gradient(135deg, #10b981, #059669)', spanClass: 'bento-item-3' },
  { name: 'Data Engineering', desc: 'Design scalable data pipelines and robust data lakes for enterprise operations.', icon: Database, path: '/signup', bg: 'linear-gradient(135deg, #8b5cf6, #4338ca)', spanClass: 'bento-item-4' },
  { name: 'UX/UI Design', desc: 'Craft beautiful interfaces.', icon: Palette, path: '/signup', bg: 'linear-gradient(135deg, #ec4899, #be123c)', spanClass: 'bento-item-5' },
  { name: 'Business Intel', desc: 'Analyze data for businesses.', icon: TrendingUp, path: '/signup', bg: 'linear-gradient(135deg, #64748b, #334155)', spanClass: 'bento-item-6' },
];

const features = [
  { title: "AI-Powered Summaries", desc: "Instantly condense complex PDFs and images into digestible study notes using Gemini.", icon: Star },
  { title: "Instructor-Led Materials", desc: "Access high-quality subjects with rich text and embedded curated video lectures.", icon: Laptop },
  { title: "Learn at Your Pace", desc: "Flexible, 24/7 access to tracking dashboards, ensuring you stay completely on top of exams.", icon: Clock },
  { title: "Interactive Assessments", desc: "Test your knowledge with dynamic quizzes and get immediate feedback to improve.", icon: Activity },
  { title: "Community Support", desc: "Connect with peers, share resources, and collaborate on challenging projects.", icon: Users },
  { title: "Targeted Goals", desc: "Set personal milestones and let our AI suggest the best learning path to reach them.", icon: Target },
];

const faqs = [
  { q: "Do I need a prior computer science background?", a: "Not at all! Our catalog is structured with beginner-friendly modular subjects, guiding you smoothly into complex topics." },
  { q: "Is the AI summarizer free to use?", a: "Yes, standard students get unlimited access to our Gemini-powered AI summarizer for PDFs and image notes." },
  { q: "Are there certificates upon completion?", a: "Certificate generation features are currently in development and will be rolled out natively to the student dashboard shortly!" },
  { q: "Can I download the video lectures?", a: "Videos are streamed directly from curated YouTube modules, meaning you can't download them locally, but you can access them 24/7 from the portal." },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call and success state
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .bento-grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: 1fr;
          }
          .bento-card {
            border-radius: 1.5rem;
            padding: 2rem;
            color: white;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
            overflow: hidden;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          .bento-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            z-index: 10;
          }
          .bento-card .bento-icon {
            transition: transform 0.5s ease;
          }
          .bento-card:hover .bento-icon {
            transform: scale(1.1) rotate(-5deg);
          }
          
          @media (min-width: 768px) {
            .bento-grid {
              grid-template-columns: repeat(4, 1fr);
              grid-auto-rows: 240px;
            }
            .bento-item-0 { grid-column: span 2; grid-row: span 2; }
            .bento-item-1 { grid-column: span 1; grid-row: span 1; }
            .bento-item-2 { grid-column: span 1; grid-row: span 2; }
            .bento-item-3 { grid-column: span 1; grid-row: span 1; }
            .bento-item-4 { grid-column: span 2; grid-row: span 1; }
            .bento-item-5 { grid-column: span 1; grid-row: span 1; }
            .bento-item-6 { grid-column: span 1; grid-row: span 1; }
          }
          @media (max-width: 767px) {
            .bento-card {
              min-height: 220px;
            }
          }
        `}
      </style>
      <PublicNavbar />

      {/* 1. Hero Section (Odd: Primary Background) */}
      <section id="home" className="animate-fade-up" style={{
        position: 'relative',
        padding: '8rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)'
      }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,23,42,0) 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#fff' }}>
            Accelerate Your Career with <span style={{ background: 'linear-gradient(270deg, var(--accent-primary), var(--accent-success), var(--accent-primary))', backgroundSize: '200% 200%', animation: 'gradientFlow 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Next-Gen Learning</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of students enhancing their computer science skills with AI tools, curated subjects, and real-time progress tracking.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem auto', lineHeight: '1.6' }}>
            Whether you&apos;re starting from scratch or leveling up your professional career, our platform adapts to your unique learning style. Gain hands-on experience and master the skills that top employers are actively seeking.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup" style={{ backgroundColor: 'var(--accent-primary)', padding: '1rem 2rem', borderRadius: 'var(--radius-full)', color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>
              Join for Free
            </Link>
            <a href="#courses" style={{ backgroundColor: 'transparent', border: '1px solid var(--glass-border)', padding: '1rem 2rem', borderRadius: 'var(--radius-full)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.125rem' }}>
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      {/* 2. Top Categories (Even: Gradient Background) */}
      <section id="courses" style={{ padding: '8rem 2rem', background: 'linear-gradient(to bottom right, var(--bg-secondary), #0f172a)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="animate-fade-up delay-1" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}>Explore Top Categories</h2>
          <div className="animate-fade-up delay-2 bento-grid">
            {bentoCategories.map((cat, i) => (
              <Link key={i} to={cat.path} className={`bento-card ${cat.spanClass}`} style={{ background: cat.bg }}>
                <div className="bento-icon" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', width: '64px', height: '64px',
                  borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                  backdropFilter: 'blur(10px)', marginBottom: '1.5rem', flexShrink: 0
                }}>
                  <cat.icon size={32} color="white" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
                  <h3 style={{ fontWeight: 800, color: '#fff', fontSize: cat.spanClass === 'bento-item-0' ? '2.5rem' : '1.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>{cat.name}</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: cat.spanClass === 'bento-item-0' ? '1.25rem' : '1rem', lineHeight: 1.5 }}>
                    {cat.desc}
                  </p>
                </div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)', pointerEvents: 'none' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us & Features (Odd: Primary Background) */}
      <section id="about" style={{ padding: '8rem 2rem', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
        
        {/* The EduSpark Story */}
        <div className="glass-panel animate-fade-up delay-1" style={{ maxWidth: '1200px', margin: '0 auto 6rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', padding: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#fff' }}>The EduSpark Story</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We realized that students waste hundreds of hours filtering through scattered notes, disconnected video formats, and outdated reading materials. The cognitive load was spent on <i>finding</i> the learning material, rather than the learning itself.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              By integrating powerful AI capabilities right into our core, we've developed an environment where documents are instantly summarized, roadmaps are personalized, and practical skills are tested iteratively so nobody gets left behind.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
             <div className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>10k+</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Active Learners</div>
             </div>
             <div className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-success)', marginBottom: '0.5rem' }}>50+</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Interactive Subjects</div>
             </div>
             <div className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-warning)', marginBottom: '0.5rem' }}>1m+</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>AI Summaries generated</div>
             </div>
             <div className="glass-panel" style={{ padding: '2rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-tertiary)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#8b5cf6', marginBottom: '0.5rem' }}>24/7</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Platform Availability</div>
             </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="animate-fade-up delay-1" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Why Learn With EduSpark?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>The single destination bridging raw notes and dynamic AI understanding.</p>
          </div>

          <div className="animate-fade-up delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {features.map((feat, i) => (
              <div key={i} className="glass-panel" style={{
                padding: '3rem', textAlign: 'left', borderTop: '4px solid var(--accent-primary)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                  <feat.icon size={32} color="var(--accent-primary)" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700, color: '#fff' }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs (Even: Gradient Background) */}
      <section id="faqs" style={{ padding: '8rem 2rem', background: 'linear-gradient(to top left, var(--bg-secondary), #1e293b)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="animate-fade-up delay-1" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Find answers to common questions about our platform.</p>
          </div>
          <div className="animate-fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel" style={{ overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{ display: 'flex', padding: '1.5rem', justifyContent: 'space-between', alignItems: 'center', backgroundColor: openFaq === i ? 'rgba(59, 130, 246, 0.05)' : 'transparent' }}>
                  <h4 style={{ fontWeight: 600, fontSize: '1.125rem', color: '#fff' }}>{faq.q}</h4>
                  <ChevronDown size={20} color="var(--accent-primary)" style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                </div>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA / Contact (Odd: Primary Background) */}
      <section id="support" className="animate-fade-up delay-1" style={{ padding: '8rem 2rem', textAlign: 'center', backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(15,23,42,0) 70%)', bottom: '-20%', right: '-10%', transform: 'translateY(-50%)', zIndex: 0, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '4rem', color: '#fff' }}>Ready to Transform the Way You Learn?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto' }}>
            Create an account today to gain unlimited access to expert-led subjects, dynamic learning modules, and AI tools! Or connect with our support agents.
          </p>
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginTop: '1rem' }}>
            <Link to="/signup" style={{
              backgroundColor: 'var(--accent-primary)', color: 'white', padding: '1.25rem 3rem', marginTop: '4rem',
              borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '1.125rem',
              boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)'
            }}>
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Contact Section (Even: Secondary Background) */}
      <section id="contact" className="animate-fade-up" style={{
        position: 'relative',
        padding: '8rem 2rem',
        backgroundColor: 'var(--bg-secondary)'
      }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', top: '10%', left: '10%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', bottom: '10%', right: '15%', pointerEvents: 'none' }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem'
        }}>
          {/* Contact Info */}
          <div className="animate-fade-up delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, color: '#fff' }}>
                <MessageSquare color="var(--accent-primary)" size={32} /> Get in Touch
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.1rem' }}>
                Reach out to our support team for any inquiries about courses, platform features, or enterprise solutions. We typically respond within 24 hours.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '50%' }}>
                <Mail color="var(--accent-primary)" size={28} />
              </div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem', color: '#fff' }}>Email Us</h4>
                <p style={{ color: 'var(--text-muted)' }}>support@eduspark.ai</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '50%' }}>
                <Phone color="var(--accent-primary)" size={28} />
              </div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem', color: '#fff' }}>Call Us</h4>
                <p style={{ color: 'var(--text-muted)' }}>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
              <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '50%' }}>
                <MapPin color="var(--accent-primary)" size={28} />
              </div>
              <div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.1rem', color: '#fff' }}>Location</h4>
                <p style={{ color: 'var(--text-muted)' }}>123 Learning Way, Tech Hub, CA</p>
              </div>
            </div>
          </div>

          <div className="glass-panel animate-fade-up delay-2" style={{ padding: '3rem 2.5rem', borderTop: '4px solid var(--accent-primary)' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: 700, color: '#fff' }}>Send us a Message</h3>

            {isSubmitted ? (
              <div className="animate-fade-in" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <Send color="var(--accent-success)" size={40} />
                </div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Thank you for reaching out. Our support team has received your message and will get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  style={{
                    marginTop: '2.5rem',
                    padding: '0.875rem 2rem',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Subject / Doubts</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What do you need help with?"
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Message Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or doubt in detail..."
                    rows="5"
                    required
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: '#fff',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem',
                    border: 'none',
                    boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.5)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(59, 130, 246, 0.39)'; }}
                >
                  <Send size={20} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

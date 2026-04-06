import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { LearningProvider } from './context/LearningContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AppLayout, StudentDashboard, AdminDashboard } from './components/AppLayout';
import ManageSubjects from './pages/admin/ManageSubjects';
import StudentSubjects from './pages/student/StudentSubjects';
import StudentAISummary from './pages/student/StudentAISummary';
import StudentCategoryCourses from './pages/student/StudentCategoryCourses';
import StudentBookmarks from './pages/student/StudentBookmarks';
import LandingPage from './pages/LandingPage';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';

// Quick Role Redirector for Dashboard
function DashboardRedirect() {
  const { userRole } = useAuth();
  if (userRole === 'admin') return <Navigate to="/admin" replace />;
  return <Navigate to="/student" replace />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookmarkProvider>
          <LearningProvider>
            <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Footer Placeholder Routes */}
          <Route path="/careers" element={<ComingSoon title="Careers" />} />
          <Route path="/ai-summarizer" element={<ComingSoon title="AI Summarizer Tool" />} />
          <Route path="/community" element={<ComingSoon title="Community Forums" />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/terms" element={<ComingSoon title="Terms & Conditions" />} />
          <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
          <Route path="/sitemap" element={<ComingSoon title="Sitemap" />} />
          <Route path="*" element={<ComingSoon title="Page Not Found" />} />
          
          {/* Protected Area wrapped in layout */}
          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            
            {/* Student Routes */}
            <Route path="student" element={<ProtectedRoute allowedRole="student"><StudentDashboard /></ProtectedRoute>} />
            <Route path="student/subjects" element={<ProtectedRoute allowedRole="student"><StudentSubjects /></ProtectedRoute>} />
            <Route path="student/ai-summary" element={<ProtectedRoute allowedRole="student"><StudentAISummary /></ProtectedRoute>} />
            <Route path="student/category/:categoryTitle" element={<ProtectedRoute allowedRole="student"><StudentCategoryCourses /></ProtectedRoute>} />
            <Route path="student/bookmarks" element={<ProtectedRoute allowedRole="student"><StudentBookmarks /></ProtectedRoute>} />
            <Route path="student/achievements" element={<div className="glass-panel p-6 m-4" style={{padding: '2rem'}}><h2>Leaderboard Coming Soon</h2></div>} />

            {/* Admin Routes */}
            <Route path="admin" element={<ProtectedRoute allowedRole="admin"><AdminDashboard /></ProtectedRoute>} />
            <Route path="admin/subjects" element={<ProtectedRoute allowedRole="admin"><ManageSubjects /></ProtectedRoute>} />
            <Route path="admin/ai-tools" element={<div className="glass-panel p-6 m-4" style={{padding: '2rem'}}><h2>Monitor AI Usage Coming Soon</h2></div>} />
            <Route path="admin/users" element={<div className="glass-panel p-6 m-4" style={{padding: '2rem'}}><h2>User Management Coming Soon</h2></div>} />
            <Route path="admin/settings" element={<div className="glass-panel p-6 m-4" style={{padding: '2rem'}}><h2>Settings Coming Soon</h2></div>} />
          </Route>
        </Routes>
          </LearningProvider>
        </BookmarkProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

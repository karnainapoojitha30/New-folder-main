import { createContext, useContext, useEffect, useState } from 'react';
import { courses as initialCourses } from '../utils/mockData';

const LearningContext = createContext();

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
}

export function LearningProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('enrolledCourses');
    return saved ? JSON.parse(saved) : initialCourses;
  });

  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const enrollCourse = (course) => {
    setEnrolledCourses(prev => {
      const isExist = prev.find(item => item.id === course.id);
      if (isExist) return prev;
      
      // Add new course with 0 progress
      const newCourse = {
        ...course,
        progress: 0,
        enrolledAt: new Date().toISOString()
      };
      return [newCourse, ...prev];
    });
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.some(item => item.id === courseId);
  };

  const updateProgress = (courseId, progress) => {
    setEnrolledCourses(prev => prev.map(course => 
      course.id === courseId ? { ...course, progress: Math.min(100, progress) } : course
    ));
  };

  const removeCourse = (courseId) => {
    setEnrolledCourses(prev => prev.filter(course => course.id !== courseId));
  };

  const value = {
    enrolledCourses,
    enrollCourse,
    isEnrolled,
    updateProgress,
    removeCourse
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}

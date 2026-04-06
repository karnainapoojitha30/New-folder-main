import { createContext, useContext, useEffect, useState } from 'react';

const BookmarkContext = createContext();

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('courseBookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('courseBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (course) => {
    setBookmarks(prev => {
      const isExist = prev.find(item => item.id === course.id);
      if (isExist) {
        return prev.filter(item => item.id !== course.id);
      } else {
        return [...prev, course];
      }
    });
  };

  const isBookmarked = (courseId) => {
    return bookmarks.some(item => item.id === courseId);
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  const value = {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    clearBookmarks
  };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}

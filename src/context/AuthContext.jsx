import { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null); // 'student' or 'admin'
  const [loading, setLoading] = useState(true);

  // Sign up and create user document with role
  async function signup(email, password, role = 'student') {
    if (!auth) {
      const mockUser = { uid: Date.now().toString(), email };
      setCurrentUser(mockUser);
      setUserRole(role);
      localStorage.setItem('mockUser', JSON.stringify(mockUser));
      localStorage.setItem('mockUserRole', role);
      return mockUser;
    }
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Save role to firestore
    if (db) {
      await setDoc(doc(db, "users", user.uid), {
        email,
        role,
        uid: user.uid,
        createdAt: new Date()
      });
    }
    
    setUserRole(role);
    return user;
  }

  async function login(email, password) {
    if (!auth) {
       const role = email.includes('admin') ? 'admin' : 'student';
       const mockUser = { uid: 'mock-' + Date.now(), email };
       setCurrentUser(mockUser);
       setUserRole(role);
       localStorage.setItem('mockUser', JSON.stringify(mockUser));
       localStorage.setItem('mockUserRole', role);
       return mockUser;
    }
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setUserRole(null);
    setCurrentUser(null);
    if (!auth) {
      localStorage.removeItem('mockUser');
      localStorage.removeItem('mockUserRole');
      return Promise.resolve();
    }
    return signOut(auth);
  }

  useEffect(() => {
    if (!auth) {
      // Firebase isn't initialized natively, probably waiting for config. Provide a mock for now.
      const storedMockUser = localStorage.getItem('mockUser');
      const storedMockUserRole = localStorage.getItem('mockUserRole');
      if (storedMockUser && storedMockUserRole) {
        setCurrentUser(JSON.parse(storedMockUser));
        setUserRole(storedMockUserRole);
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Fetch role from firestore
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserRole(docSnap.data().role);
          } else {
            console.log("No such user document!");
            setUserRole('student'); // Default fallback
          }
        } catch (err) {
          console.error("Error fetching user role", err);
          setUserRole('student');
        }
      } else {
        setUserRole(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userRole,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

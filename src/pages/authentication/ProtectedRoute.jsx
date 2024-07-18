// src/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or any loading spinner component
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
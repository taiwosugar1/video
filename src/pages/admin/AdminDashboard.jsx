// src/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbackCollection = collection(db, 'feedback');
      const feedbackSnapshot = await getDocs(feedbackCollection);
      setFeedbacks(feedbackSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchFeedbacks();
  }, []);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            <p>Name: {feedback.name}</p>
            <p>Email: {feedback.email}</p>
            <p>Message: {feedback.message}</p>
            <p>Timestamp: {new Date(feedback.timestamp.seconds * 1000).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
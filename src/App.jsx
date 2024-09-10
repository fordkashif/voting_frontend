import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  // State for managing loading and feedback
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Function to handle the "Vote" button click
  const handleVote = async () => {
    setLoading(true);  // Set loading to true when the request starts
    setMessage('');    // Clear any previous message

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      
      // Send a POST request to the Flask backend
      const response = await fetch(`${backendUrl}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);  // Display the success message from the backend
      } else {
        setMessage('Failed to submit vote');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error submitting vote');
    }

    setLoading(false);  // Set loading to false when the request is done
  };

  return (
    <div className="container">
      <h1>Vote App</h1>

      {/* Show the button if not loading, else show a loading message */}
      {loading ? (
        <p>Voting in progress...</p>
      ) : (
        <button onClick={handleVote}>Vote</button>
      )}

      {/* Display the message from the backend */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;

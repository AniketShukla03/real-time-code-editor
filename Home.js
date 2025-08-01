// client/src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = 'room-' + uuidv4().slice(0, 6); // short random ID
    navigate(`/${roomId}`);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#1e1e1e', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem' }}>🚀 Real-Time Code Editor</h1>
      <p style={{ marginBottom: '2rem' }}>Code with your friends in real-time</p>
      <button
        onClick={createRoom}
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          fontSize: '1rem',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        ➕ Create New Room
      </button>
    </div>
  );
}

export default Home;


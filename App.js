import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Editor from '@monaco-editor/react';
import { useParams } from 'react-router-dom';

const socket = io('http://localhost:4000');

function App() {
  const { roomId } = useParams();
  const [code, setCode] = useState('// Start coding...');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleEditorChange = (value) => {
    setCode(value);
    socket.emit('code-change', { roomId, code: value });
  };

  const sendMessage = () => {
    if (chatInput.trim()) {
      socket.emit("chat-message", { roomId, message: chatInput });
      setMessages((prev) => [...prev, `You: ${chatInput}`]);
      setChatInput('');
    }
  };

  useEffect(() => {
    socket.emit('join-room', roomId);

    socket.on('code-change', (newCode) => {
      setCode(newCode);
    });

    socket.on('chat-message', (message) => {
      setMessages((prev) => [...prev, `Stranger: ${message}`]);
    });

    return () => {
      socket.off('code-change');
      socket.off('chat-message');
    };
  }, [roomId]);

  return (
    <div style={{ height: '100vh', backgroundColor: '#1e1e1e', padding: '10px', color: 'white' }}>
      <h2>🧑‍💻 Room: {roomId}</h2>

      <Editor
        height="65vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
      />

      <div style={{ marginTop: '20px' }}>
        <h3>💬 Chat</h3>
        <div style={{ height: '150px', overflowY: 'auto', backgroundColor: '#2e2e2e', padding: '10px', borderRadius: '5px' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: '5px' }}>{msg}</div>
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: '5px' }}>
          <input
            style={{ flex: 1, padding: '8px', borderRadius: '5px 0 0 5px', border: 'none' }}
            type="text"
            placeholder="Type a message"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            style={{ padding: '8px 12px', borderRadius: '0 5px 5px 0', border: 'none', backgroundColor: '#0070f3', color: 'white', cursor: 'pointer' }}
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import logo from './my-logo.png'; 

function App() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    task: ''
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Processing... ⏳");

    try {
      const response = await axios.post('http://localhost:5000/api/trigger', formData);
      console.log(response.data);
      setStatus("✅ Success! Automation Started.");
    } catch (error) {
      console.error(error);
      setStatus("❌ Error! Check Backend connection.");
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <img 
          src={logo} 
          alt="Logo" 
          style={{ width: '100px', height: 'auto', marginBottom: '15px' }} 
        />
        <h1>⚡ AutoFlow</h1>
        <p>Web Automation Platform</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>User Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com" 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Task Description</label>
            <textarea 
              name="task" 
              placeholder="What should the automation do?" 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn">Run Automation 🚀</button>
        </form>

        {status && <p className="status-msg">{status}</p>}
      </div>
    </div>
  );
}

export default App;
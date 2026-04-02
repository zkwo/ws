import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './src/Home.jsx';
import Login from './src/Login.jsx';
import Register from './src/Register.jsx';
import AdminPanel from './src/AdminPanel.jsx';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fungsi sederhana untuk login admin (bisa dikembangkan ke Backend)
  const handleAdminLogin = (pass) => {
    if (pass === "1@2#3$abcd") {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  return (
    <div className={isDarkMode ? 'bg-black text-white' : 'bg-[#f8f9fa] text-gray-900'}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
          
          {/* Admin Route dengan Proteksi Sederhana */}
          <Route 
            path="/admin" 
            element={isAdmin ? <AdminPanel /> : <AdminLogin onLogin={handleAdminLogin} />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

// Sub-komponen Login Admin Sederhana
const AdminLogin = ({ onLogin }) => {
  const [input, setInput] = useState('');
  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="glass-card p-8 rounded-2xl w-full max-w-sm text-center">
        <h2 className="text-xl font-bold mb-6">Admin Access</h2>
        <input 
          type="password" 
          placeholder="Enter Admin Password" 
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 mb-4 outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={() => !onLogin(input) && alert('Wrong Password!')}
          className="w-full bg-white text-black font-bold py-3 rounded-lg active:scale-95 transition"
        >
          Login Dashboard
        </button>
      </div>
    </div>
  );
};

export default App;

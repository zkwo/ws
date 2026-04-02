import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from '.Register';
import AdminPanel from './AdminPanel';
import MemberDashboard from './MemberDashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Cek status login saat aplikasi pertama kali dimuat
  useEffect(() => {
    const savedAdmin = localStorage.getItem('admin_session');
    if (savedAdmin === 'active') {
      setIsAdmin(true);
    }
  }, []);

  const handleAdminLogin = (pass, remember) => {
    if (pass === "1@2#3$abcd") {
      setIsAdmin(true);
      if (remember) {
        localStorage.setItem('admin_session', 'active');
      }
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('admin_session');
  };

  return (
    <div className={isDarkMode ? 'bg-black text-white min-h-screen' : 'bg-[#f8f9fa] text-gray-900 min-h-screen'}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
          <Route path="/dashboard" element={<MemberDashboard isDarkMode={isDarkMode} />} />
          
          <Route 
            path="/admin" 
            element={isAdmin ? <AdminPanel onLogout={handleAdminLogout} /> : <AdminLogin onLogin={handleAdminLogin} />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

const AdminLogin = ({ onLogin }) => {
  const [input, setInput] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="glass-card p-8 rounded-2xl w-full max-w-sm">
        <h2 className="text-xl font-bold mb-6 text-center italic">VALTUS <span className="not-italic opacity-50 text-xs">ADMIN</span></h2>
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 mb-4 outline-none focus:border-white/30 transition-all"
          onChange={(e) => setInput(e.target.value)}
        />
        
        {/* Checkbox Save Login */}
        <label className="flex items-center gap-3 mb-6 cursor-pointer group">
          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${remember ? 'bg-white border-white' : 'border-white/20'}`}>
            <input 
              type="checkbox" 
              className="hidden" 
              checked={remember} 
              onChange={() => setRemember(!remember)} 
            />
            {remember && <i className="fa-solid fa-check text-[10px] text-black"></i>}
          </div>
          <span className="text-[11px] font-bold opacity-60 group-hover:opacity-100 transition-opacity">SAVE LOGIN</span>
        </label>

        <button 
          onClick={() => !onLogin(input, remember) && alert('Salah!')}
          className="w-full bg-white text-black font-bold py-4 rounded-xl active:scale-95 transition shadow-lg"
        >
          Masuk Dashboard
        </button>
      </div>
    </div>
  );
};

export default App;

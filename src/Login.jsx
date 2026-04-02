import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ isDarkMode }) {
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className={`w-full max-w-md p-8 rounded-3xl glass-card border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
        <h2 className="text-2xl font-black mb-1 italic">MASUK <span className="not-italic text-xs opacity-40 ml-2">VALTUS</span></h2>
        <p className="text-[10px] uppercase tracking-widest opacity-40 mb-8">Akses Akun Member</p>
        
        <div className="space-y-4">
          <input type="text" placeholder="Username / Email" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all text-sm" />
          <input type="password" placeholder="Password" className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all text-sm" />
          
          {/* Fitur Save Login (Checkbox) */}
          <label className="flex items-center gap-3 py-2 cursor-pointer group">
            <div 
              onClick={() => setRemember(!remember)}
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${remember ? 'bg-blue-500 border-blue-500' : 'border-white/20'}`}
            >
              {remember && <i className="fa-solid fa-check text-[10px] text-white"></i>}
            </div>
            <span className="text-[11px] font-bold opacity-50 group-hover:opacity-100 transition-opacity">INGAT SAYA (SAVE LOGIN)</span>
          </label>

          <button className={`w-full py-4 rounded-xl font-bold mt-2 shadow-lg active:scale-95 transition ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            Masuk Sekarang
          </button>
        </div>

        <p className="text-center text-[10px] mt-8 opacity-40 font-bold uppercase tracking-widest">
          Belum punya akun? <Link to="/register" className="text-blue-400 underline ml-1">Daftar</Link>
        </p>
      </div>
    </div>
  );
}

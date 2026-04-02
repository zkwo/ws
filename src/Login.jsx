import { Link } from 'react-router-dom';

const Login = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className={`w-full max-w-md p-8 rounded-3xl glass-card ${!isDarkMode && 'bg-white border-gray-200'}`}>
        <h2 className="text-2xl font-bold mb-2">Selamat Datang</h2>
        <p className="text-sm opacity-50 mb-8">Masuk ke akun member Valtus kamu.</p>
        
        <div className="space-y-4">
          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 ml-1">Username / Email</label>
            <input type="text" className="w-full mt-1 p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30" placeholder="zhens@example.com" />
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold tracking-widest opacity-50 ml-1">Password</label>
            <input type="password" className="w-full mt-1 p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/30" placeholder="••••••••" />
          </div>
          <button className={`w-full py-4 rounded-xl font-bold mt-4 active:scale-95 transition ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            Masuk Sekarang
          </button>
        </div>

        <p className="text-center text-xs mt-8 opacity-60">
          Belum punya akun? <Link to="/register" className="font-bold underline">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

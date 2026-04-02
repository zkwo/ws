import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FaqItem from './components/Faqltem';

export default function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="min-h-screen">
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
      
      <main className="max-w-md mx-auto px-6 mt-12 text-center">
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 glass-card flex items-center justify-center rounded-2xl shadow-xl ${isDarkMode ? 'bg-white/5' : 'bg-white border-gray-200'}`}>
            <span className="text-3xl font-black italic">V</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">VALTUS</h1>
        <p className="text-sm font-medium opacity-50">Penjual Robux Terpercaya</p>
        
        {/* Tombol Aksi */}
        <div className="mt-10 space-y-4">
           <button className={`w-full py-4 rounded-xl font-bold shadow-lg transition active:scale-95 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
             Pesan via Gamepass
           </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

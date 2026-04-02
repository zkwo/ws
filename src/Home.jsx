import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FaqItem from './components/Faqltem';

export default function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="min-h-screen">
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
      {/* Isi konten landing page kamu di sini */}
      <div className="max-w-md mx-auto px-6 mt-10">
         <h1 className="text-4xl font-bold text-center">VALTUS</h1>
         <p className="text-center opacity-50">Premium Robux Store</p>
      </div>
      <Footer />
    </div>
  );
}

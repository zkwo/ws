import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FaqItem from './components/Faqltem';

export default function Home({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="min-h-screen">
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
      
      <main className="max-w-md mx-auto px-6 mt-12 mb-24 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 glass-card flex items-center justify-center rounded-2xl shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
            <span className={`text-3xl font-black italic ${isDarkMode ? 'text-white' : 'text-black'}`}>V</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">VALTUS</h1>
        <p className="text-sm font-medium opacity-50">Penjual Robux Terpercaya</p>
        
        {/* Tombol Aksi - Desain Asli */}
        <div className="mt-10 space-y-4">
          <button className={`w-full py-4 rounded-xl font-bold shadow-lg transition active:scale-95 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
            Pesan via Gamepass
          </button>
          <button className={`w-full py-4 rounded-xl font-bold transition active:scale-95 glass-card border ${isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-gray-200 text-black'}`}>
            Pesan via Group Fund
          </button>
        </div>

        {/* FAQ - Gunakan FaqItem agar bisa Open/Close */}
        <section className="mt-20 space-y-2 text-left">
          <h3 className="text-center font-bold mb-8 text-sm tracking-wide opacity-80">Pertanyaan yang Sering Diajukan</h3>
          
          <FaqItem 
            title="Apa itu Valtus?" 
            desc="Valtus adalah penjual Robux terpercaya dengan harga bersaing melalui metode Gamepass dan Group Fund. Kami memproses pesanan dengan cepat dan menyediakan dukungan chat langsung."
            isOpenDefault={true}
          />
          <FaqItem title="Bagaimana cara order lewat Gamepass?" desc="" />
          <FaqItem title="Bagaimana cara order lewat Group Fund?" desc="" />
          <FaqItem title="Apakah aman membeli Robux di sini?" desc="" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: '86 Diamonds', price: 'IDR 20.000', img: 'mlbb-icon.png' },
  { id: 2, name: '172 Diamonds', price: 'IDR 40.000', img: 'mlbb-icon.png' },
  { id: 3, name: '257 Diamonds', price: 'IDR 60.000', img: 'mlbb-icon.png' },
  { id: 4, name: '706 Diamonds', price: 'IDR 155.000', img: 'mlbb-icon.png' },
];

export default function MemberDashboard({ isDarkMode }) {
  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Header Profile & Cart */}
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full border-2 border-white/10 shadow-lg"></div>
          <div>
            <p className="text-[10px] opacity-50 uppercase font-black">Halo, Member</p>
            <h2 className="text-sm font-bold tracking-tight">siZhens Dev</h2>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 glass-card rounded-full flex items-center justify-center border border-white/10">
            <i className="fa-solid fa-cart-shopping text-xs"></i>
          </button>
        </div>
      </header>

      <h1 className="text-2xl font-black mb-6 italic tracking-tighter">MOBILE LEGENDS</h1>

      {/* Grid Produk */}
      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="glass-card p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg mb-3 flex items-center justify-center">
               <i className="fa-solid fa-gem text-blue-400 text-xs"></i>
            </div>
            <h3 className="text-xs font-bold mb-1">{p.name}</h3>
            <p className="text-[10px] opacity-40 mb-4">{p.price}</p>
            <button className="w-full py-2 bg-white/5 group-hover:bg-white group-hover:text-black transition-all rounded-lg text-[10px] font-bold">
              AMBIL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

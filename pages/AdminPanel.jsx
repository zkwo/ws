import { useState } from 'react';

export default function AdminPanel() {
  const [stats] = useState([
    { label: 'Total Sales', val: 'IDR 1.2M' },
    { label: 'Orders', val: '42' },
    { label: 'Members', val: '15' }
  ]);

  return (
    <div className="min-h-screen bg-[#050505] p-6 text-white font-sans">
      <div className="max-w-lg mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-bold italic tracking-tighter">V <span className="not-italic text-sm ml-2 opacity-50 font-medium">ADMIN</span></h1>
          <a href="/" className="text-[10px] bg-white/5 px-3 py-1 rounded-full border border-white/10">Logout</a>
        </header>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-4 rounded-xl text-center">
              <p className="text-[8px] uppercase opacity-40 mb-1">{s.label}</p>
              <p className="text-sm font-bold">{s.val}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-bold mb-4 opacity-70">Pesanan Terbaru</h3>
        <div className="space-y-3">
          <div className="glass-card p-4 rounded-xl flex justify-between items-center">
            <div>
              <p className="text-xs font-bold">siZhens_Dev</p>
              <p className="text-[10px] opacity-40">1000 Robux (Gamepass)</p>
            </div>
            <span className="text-[9px] bg-green-500/20 text-green-400 px-2 py-1 rounded">Selesai</span>
          </div>
        </div>
      </div>
    </div>
  );
}

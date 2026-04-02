import { useState } from 'react';

export default function AdminPanel({ onLogout }) {
  const [orders, setOrders] = useState([
    { id: '#001', user: 'siZhens', item: '86 DM', status: 'Pending', msg: '' }
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto pb-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-black italic">V <span className="not-italic text-[10px] opacity-30">CORE</span></h1>
        <button onClick={onLogout} className="text-[10px] font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">LOGOUT</button>
      </div>

      <div className="space-y-6">
        {orders.map((o) => (
          <div key={o.id} className="glass-card p-5 rounded-3xl border border-white/10 relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] opacity-30 font-bold uppercase">{o.id}</p>
                <h4 className="font-bold text-sm">{o.user}</h4>
                <p className="text-xs text-blue-400 font-medium">{o.item}</p>
              </div>
              <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase ${
                o.status === 'Confirm' ? 'bg-green-500/20 text-green-400' : 
                o.status === 'Reject' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/10 text-yellow-500'
              }`}>{o.status}</span>
            </div>

            {/* Chat Simpel */}
            <div className="bg-black/20 rounded-xl p-3 mb-4">
               <input 
                type="text" 
                placeholder="Ketik pesan ke member..." 
                className="w-full bg-transparent text-[11px] outline-none border-b border-white/5 pb-1 mb-2"
               />
               <p className="text-[9px] opacity-30">Pesan: {o.msg || 'Belum ada pesan'}</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => updateStatus(o.id, 'Confirm')} className="py-2 bg-green-500/20 text-green-400 rounded-lg text-[10px] font-bold active:scale-95 transition">CONFIRM</button>
              <button onClick={() => updateStatus(o.id, 'Reject')} className="py-2 bg-red-500/20 text-red-400 rounded-lg text-[10px] font-bold active:scale-95 transition">REJECT</button>
              <button onClick={() => alert('Edit Mode')} className="py-2 bg-white/5 text-white rounded-lg text-[10px] font-bold active:scale-95 transition">EDIT</button>
              <button onClick={() => deleteOrder(o.id)} className="py-2 bg-white/5 text-gray-500 rounded-lg text-[10px] font-bold active:scale-95 transition">DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
